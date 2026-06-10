import './Monitoramento.css'
import { Droplets, Thermometer, CheckCircle2 } from 'lucide-react'

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
                <div className="item-umidade">
                  <div className="info-setor">
                    <span className="nome-setor">Setor A</span>
                    <span className="valor-setor">68%</span>
                  </div>
                  <div className="barra-fundo"><div className="barra-preenchimento" style={{width: '68%'}}></div></div>
                </div>
                <div className="item-umidade">
                  <div className="info-setor">
                    <span className="nome-setor">Setor C</span>
                    <span className="valor-setor">72%</span>
                  </div>
                  <div className="barra-fundo"><div className="barra-preenchimento" style={{width: '72%'}}></div></div>
                </div>
                <div className="item-umidade">
                  <div className="info-setor">
                    <span className="nome-setor">Setor B</span>
                    <span className="valor-setor">61%</span>
                  </div>
                  <div className="barra-fundo"><div className="barra-preenchimento" style={{width: '61%'}}></div></div>
                </div>
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
                  <span className="valor-temperatura">24°C</span>
                  <span className="legenda-temperatura">Temperatura Média</span>
                </div>
                <span className="variacao-temperatura">variação: 22°C - 26°C</span>
              </div>
            </div>

            {/* Coluna 3: Status (Pills Verdes) */}
            <div className="coluna-sensor">
              <div className="coluna-titulo">
                <CheckCircle2 color="#4ade80" size={28} />
                <h3>Status dos sensores</h3>
              </div>
              <div className="conteudo-coluna lista-status">
                <div className="item-status">
                  <span className="nome-sensor">Sensor 1</span>
                  <span className="badge-online">Online</span>
                </div>
                <div className="item-status">
                  <span className="nome-sensor">Sensor 2</span>
                  <span className="badge-online">Online</span>
                </div>
                <div className="item-status">
                  <span className="nome-sensor">Sensor 3</span>
                  <span className="badge-online">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-hidrolink">
        <p>© 2026 Hidrolink</p>
        <span>Tecnologia para agricultura sustentável</span>
      </footer>
    </div>
  )
}

export default Monitoramento