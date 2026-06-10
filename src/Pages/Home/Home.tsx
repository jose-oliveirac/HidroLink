import './Home.css'
import { Droplets, Thermometer, Cloud, CheckCircle2, AlertTriangle, CalendarDays } from 'lucide-react'

function Home() {
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
              <h2 className="valor-card">38%</h2>
              <div className="barra-progresso-container">
                <div className="barra-progresso" style={{ width: '38%' }}></div>
              </div>
              <span className="subtexto-card">Mínimo ideal: 45%</span>
            </div>
          </div>

          <div className="card card-temperatura">
            <div className="card-header">
              <span className="titulo-card">Temperatura</span>
              <Thermometer color="#ff7f50" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card">28°C</h2>
              <span className="subtexto-card">Máxima prevista: 32°C</span>
            </div>
          </div>

          <div className="card card-umidade-ar">
            <div className="card-header">
              <span className="titulo-card">Umidade do Ar</span>
              <Cloud color="#a0aec0" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card">62%</h2>
              <span className="subtexto-card">Condição estável</span>
            </div>
          </div>

          <div className="card card-status">
            <div className="card-header">
              <span className="titulo-card">Status</span>
              <CheckCircle2 color="#4ade80" size={24} />
            </div>
            <div className="card-body">
              <h2 className="valor-card status-online">Online</h2>
              <span className="subtexto-card">Última leitura: há 2 min</span>
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
              <p>Com base na umidade atual de 38% e na ausência de chuva prevista, recomendamos irrigação hoje às 18h por 45 minutos no Setor Sul.</p>
            </div>

            <div className="botoes-acao">
              <button className="btn-aceitar">Aceitar e Agendar</button>
              <button className="btn-ignorar">Ignorar</button>
            </div>
          </div>
          
          <div className="card large card-relatorio">
            <div className="card-header">
              <span className="titulo-card">Relatório Semanal</span>
              <CalendarDays color="#6366f1" size={24} />
            </div>
            <div className="lista-relatorio">
              <div className="item-relatorio">
                <div className="info-data">Ontem, 18:00</div>
                <div className="info-detalhe">Irrigação Concluída - 40 min</div>
                <div className="info-economia">Economia: R$ 4,50</div>
              </div>
              <div className="item-relatorio">
                <div className="info-data">13/06, 17:30</div>
                <div className="info-detalhe">Irrigação Concluída - 30 min</div>
                <div className="info-economia">Economia: R$ 3,20</div>
              </div>
              <div className="item-relatorio">
                <div className="info-data">14/06  , 08:00</div>
                <div className="info-detalhe">Cancelado (Precedência Climática)</div>
                <div className="info-economia">Economia: R$ 8,00</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home