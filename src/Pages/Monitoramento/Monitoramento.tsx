import './Monitoramento.css'
import { Droplets, Thermometer, CheckCircle2 } from 'lucide-react'
import { umidadePorSetor, temperaturaSolo, statusSensores } from '../../mocks/dados'

function Monitoramento() {
  return (
    <div className="monitoramento-container">
      <main className="monitoramento-content">
        <div className="card-monitoramento-principal">
          <div className="monitoramento-header">
            <h2>Monitoramento em Tempo Real</h2>
            <p>Dados dos sensores IoT instalados na propriedade</p>
          </div>

          <div className="monitoramento-grid">

            {/* Coluna 1: Umidade (Barras de Progresso) */}
            <div className="coluna-sensor">
              <div className="coluna-titulo">
                <Droplets color="#00bfff" size={28} />
                <h3>Sensor de Umidade</h3>
              </div>
              <div className="conteudo-coluna lista-umidade">
                {umidadePorSetor.map(({ setor, umidade }) => (
                  <div className="item-umidade" key={setor}>
                    <div className="info-setor">
                      <span className="nome-setor">{setor}</span>
                      <span className="valor-setor">{umidade}%</span>
                    </div>
                    <div className="barra-fundo"><div className="barra-preenchimento" style={{ width: `${umidade}%` }}></div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2: Temperatura (Caixa Laranja) */}
            <div className="coluna-sensor">
              <div className="coluna-titulo">
                <Thermometer color="#ff7f50" size={28} />
                <h3>Temperatura do Solo</h3>
              </div>
              <div className="conteudo-coluna">
                <div className="caixa-temperatura">
                  <span className="valor-temperatura">{temperaturaSolo.media}°C</span>
                  <span className="legenda-temperatura">Temperatura Média</span>
                </div>
                <span className="variacao-temperatura">variação: {temperaturaSolo.minima}°C - {temperaturaSolo.maxima}°C</span>
              </div>
            </div>

            {/* Coluna 3: Status (Pills Verdes) */}
            <div className="coluna-sensor">
              <div className="coluna-titulo">
                <CheckCircle2 color="#4ade80" size={28} />
                <h3>Status dos sensores</h3>
              </div>
              <div className="conteudo-coluna lista-status">
                {statusSensores.map((sensor) => (
                  <div className="item-status" key={sensor.nome}>
                    <span className="nome-sensor">{sensor.nome}</span>
                    <span className="badge-online">{sensor.online ? 'Online' : 'Offline'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-hidrolink">
        <p>© 2026 HidroLink - Sigma Code Team</p>
        <span>Tecnologia para agricultura sustentável</span>
      </footer>
    </div>
  )
}

export default Monitoramento
