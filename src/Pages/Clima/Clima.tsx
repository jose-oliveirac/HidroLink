import './Clima.css'
import { Cloud } from 'lucide-react'

function Clima() {
  return (
    <div className="clima-container">
      <main className="clima-content">
        <div className="card-clima-principal">
          <div className="clima-header">
            <h2>Previsão do tempo</h2>
            <p>Condições climáticas para os próximos dias</p>
          </div>

          <div className="clima-grid">
            <div className="clima-esquerdo">
              <div className="card-hoje">
                <h3>Hoje</h3>
                <div className="hoje-destaque">
                  <Cloud size={56} color="#1f2937" strokeWidth={1.5} />
                  <div className="hoje-temperatura">
                    <span className="temp-valor">26°C</span>
                    <span className="temp-desc">Parcialmente nublado</span>
                  </div>
                </div>
                <div className="hoje-detalhes">
                  <span>Umidade: 68%</span>
                  <span>Chance de chuva: 20%</span>
                </div>
              </div>

              <div className="card-recomendacao-clima">
                <span className="rec-titulo">Recomendação</span>
                <p className="rec-texto">Irrigação recomendada hoje à tarde</p>
              </div>
            </div>

            <div className="clima-direito">
              <h3 className="titulo-proximos">Próximos 15 dias</h3>
              <div className="lista-dias">
                <div className="dia-row">
                  <span className="dia-nome">Amanhã</span>
                  <div className="dia-dados">
                    <Cloud size={20} color="#9ca3af" />
                    <span className="dia-temp">22°C</span>
                    <span className="dia-chuva">10%</span>
                  </div>
                </div>

                <div className="dia-row">
                  <span className="dia-nome">Quinta</span>
                  <div className="dia-dados">
                    <Cloud size={20} color="#9ca3af" />
                    <span className="dia-temp">21°C</span>
                    <span className="dia-chuva">15%</span>
                  </div>
                </div>

                <div className="dia-row">
                  <span className="dia-nome">Sexta</span>
                  <div className="dia-dados">
                    <Cloud size={20} color="#9ca3af" />
                    <span className="dia-temp">19°C</span>
                    <span className="dia-chuva">9%</span>
                  </div>
                </div>

                <div className="dia-row">
                  <span className="dia-nome">Sábado</span>
                  <div className="dia-dados">
                    <Cloud size={20} color="#9ca3af" />
                    <span className="dia-temp">27°C</span>
                    <span className="dia-chuva">20%</span>
                  </div>
                </div>

                <div className="dia-row">
                  <span className="dia-nome">Domingo</span>
                  <div className="dia-dados">
                    <Cloud size={20} color="#9ca3af" />
                    <span className="dia-temp">30°C</span>
                    <span className="dia-chuva">22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Clima