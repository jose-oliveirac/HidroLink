import './Home.css'
import { useState } from 'react'
import { Droplets, Thermometer, Cloud, CheckCircle2, AlertTriangle, CalendarDays } from 'lucide-react'
import ModalConfirmacao from '../../Components/ModalConfirmacao/ModalConfirmacao'
import { resumoHome, recomendacaoIrrigacao, relatorioSemanal } from '../../mocks/dados'

function Home() {
  const [modalAberto, setModalAberto] = useState(false)
  const { horario, duracaoMin, setor } = recomendacaoIrrigacao

  return (
    <div className="home-container">
      <main className="dashboard-content">

        {/* Top Cards - Indicadores Rápidos */}

        <section className="cards-top">
          <div className="card card-umidade-solo">
            <div className="card-header">
              <span className="titulo-card">Umidade do solo</span>
              <Droplets color="#00bfff" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card">{resumoHome.umidadeSolo}%</h2>
              <div className="barra-progresso-container">
                <div className="barra-progresso" style={{ width: `${resumoHome.umidadeSolo}%` }}></div>
              </div>
              <span className="subtexto-card">Mínimo ideal: {resumoHome.umidadeSoloMinima}%</span>
            </div>
          </div>

          <div className="card card-temperatura">
            <div className="card-header">
              <span className="titulo-card">Temperatura</span>
              <Thermometer color="#ff7f50" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card">{resumoHome.temperatura}°C</h2>
              <span className="subtexto-card">Máxima prevista: {resumoHome.temperaturaMaxima}°C</span>
            </div>
          </div>

          <div className="card card-umidade-ar">
            <div className="card-header">
              <span className="titulo-card">Umidade do Ar</span>
              <Cloud color="#a0aec0" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card">{resumoHome.umidadeAr}%</h2>
              <span className="subtexto-card">Condição estável</span>
            </div>
          </div>

          <div className="card card-status">
            <div className="card-header">
              <span className="titulo-card">Status</span>
              <CheckCircle2 color="#4ade80" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card status-online">{resumoHome.sensorOnline ? 'Online' : 'Offline'}</h2>
              <span className="subtexto-card">Última leitura: {resumoHome.ultimaLeitura}</span>
            </div>
          </div>
        </section>

        {/* Bottom Cards - Recomendações e Relatórios */}
        <section className="cards-bottom">
          <div className="card large card-recomendacao">
            <div className="card-header">
              <span className="titulo-card">Recomendação de Irrigação</span>
              <AlertTriangle color="#eab308" size={24} />
            </div>

            <div className="alerta-irrigacao">
              <strong>Irrigar Recomendado</strong>
              <p>Com base na umidade atual de {resumoHome.umidadeSolo}% e na ausência de chuva prevista, recomendamos irrigação hoje às {horario} por {duracaoMin} minutos no {setor}.</p>
            </div>

            <div className="botoes-acao">
              <button type="button" className="btn-aceitar" onClick={() => setModalAberto(true)}>Aceitar e Agendar</button>
              <button type="button" className="btn-ignorar">Ignorar</button>
            </div>
          </div>

          <div className="card large card-relatorio">
            <div className="card-header">
              <span className="titulo-card">Relatório Semanal</span>
              <CalendarDays color="#6366f1" size={24} />
            </div>
            <div className="lista-relatorio">
              {relatorioSemanal.map((item) => (
                <div className="item-relatorio" key={item.data}>
                  <div className="info-data">{item.data}</div>
                  <div className="info-detalhe">{item.detalhe}</div>
                  <div className="info-economia">Economia: {item.economia}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ModalConfirmacao
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
        mensagem={`Irrigação agendada para hoje às ${horario}, por ${duracaoMin} minutos no ${setor}.`}
      />
    </div>
  )
}

export default Home
