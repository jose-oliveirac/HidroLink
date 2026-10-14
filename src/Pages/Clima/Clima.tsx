import './Clima.css'
import { Cloud } from 'lucide-react'
import { climaHoje, previsaoProximosDias } from '../../mocks/dados'

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
                    <span className="temp-valor">{climaHoje.temperatura}°C</span>
                    <span className="temp-desc">{climaHoje.descricao}</span>
                  </div>
                </div>
                <div className="hoje-detalhes">
                  <span>Umidade: {climaHoje.umidade}%</span>
                  <span>Chance de chuva: {climaHoje.chanceChuva}%</span>
                </div>
              </div>

              <div className="card-recomendacao-clima">
                <span className="rec-titulo">Recomendação</span>
                <p className="rec-texto">{climaHoje.recomendacao}</p>
              </div>
            </div>

            <div className="clima-direito">
              <h3 className="titulo-proximos">Próximos {previsaoProximosDias.length} dias</h3>
              <div className="lista-dias">
                {previsaoProximosDias.map((previsao) => (
                  <div className="dia-row" key={previsao.dia}>
                    <span className="dia-nome">{previsao.dia}</span>
                    <div className="dia-dados">
                      <Cloud size={20} color="#9ca3af" />
                      <span className="dia-temp">{previsao.temperatura}°C</span>
                      <span className="dia-chuva">{previsao.chanceChuva}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Clima
