import './Relatorio.css'
import { Download } from 'lucide-react'
import { relatoriosDisponiveis, estatisticasMes } from '../../mocks/dados'

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
                {relatoriosDisponiveis.map((nome) => (
                  <button type="button" className="item-download" key={nome}>
                    <span className="nome-arquivo">{nome}</span>
                    <Download size={20} color="#4b5563" />
                  </button>
                ))}
              </div>
            </div>

            <div className="coluna-estatisticas">
              <h3 className="titulo-sessao">Estatísticas do mês</h3>

              <div className="lista-stats">
                {estatisticasMes.map((stat) => (
                  <div className={`card-stat stat-${stat.cor}`} key={stat.label}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-valor">{stat.valor}</span>
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

export default Relatorio
