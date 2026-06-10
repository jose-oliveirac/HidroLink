import './Relatorio.css'
import { Download } from 'lucide-react'

function Relatorio() {
  return (
    <div className="relatorios-container">
      <main className="relatorios-content">
        <div className="card-relatorios-principal">
          <div className="relatorios-header">
            <h2>Relatórios e análises</h2>
            <p>Histórico de análises de desempenho</p>
          </div>

          <div className="relatorios-grid">
            <div className="coluna-relatorios">
              <h3 className="titulo-sessao">Relatórios disponíveis</h3>
              
              <div className="lista-downloads">
                <button className="item-download">
                  <span className="nome-arquivo">Consumo de água - Novembro</span>
                  <Download size={20} color="#4b5563" />
                </button>
                
                <button className="item-download">
                  <span className="nome-arquivo">Eficiência de irrigação</span>
                  <Download size={20} color="#4b5563" />
                </button>
                
                <button className="item-download">
                  <span className="nome-arquivo">Análise de custos</span>
                  <Download size={20} color="#4b5563" />
                </button>
                
                <button className="item-download">
                  <span className="nome-arquivo">Histórico climático</span>
                  <Download size={20} color="#4b5563" />
                </button>
              </div>
            </div>

            <div className="coluna-estatisticas">
              <h3 className="titulo-sessao">Estatísticas do mês</h3>
              
              <div className="lista-stats">
                <div className="card-stat stat-verde">
                  <span className="stat-label">Economia de água</span>
                  <span className="stat-valor">1.140L</span>
                </div>

                <div className="card-stat stat-roxo">
                  <span className="stat-label">Redução de Custos</span>
                  <span className="stat-valor">R$ 230,10</span>
                </div>

                <div className="card-stat stat-rosa">
                  <span className="stat-label">Eficiência Média</span>
                  <span className="stat-valor">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-hidrolink">
        <p>© 2026 Hidrolink - Sigma Code Team</p>
        <span>Tecnologia para agricultura sustentável</span>
      </footer>
    </div>
  )
}

export default Relatorio