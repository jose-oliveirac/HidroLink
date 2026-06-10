import './Noticias.css'
import { ArrowRight } from 'lucide-react'

function Noticias() {
  return (
    <div className="noticias-container">
      <main className="noticias-content">
        <div className="noticias-header">
          <h2>Notícias do agronegócio</h2>
          <p>Últimas notícias do agronegócio</p>
        </div>

        <div className="noticias-lista-wrapper">
          <div className="noticias-lista">
            <article className="noticia-card">
              <div className="noticia-cabecalho">
                <span className="noticia-tag">Tecnologia</span>
                <span className="noticia-tempo">2h Atrás</span>
              </div>
              <div className="noticia-corpo">
                <h3>Nova tecnologia IoT revoluciona agricultura familiar</h3>
                <p>Sensores inteligentes ajudam pequenos produtores a otimizar o uso de água</p>
              </div>
              <a className="noticia-link">
                Ler mais <ArrowRight size={18} />
              </a>
            </article>

            <article className="noticia-card">
              <div className="noticia-cabecalho">
                <span className="noticia-tag">Mercado</span>
                <span className="noticia-tempo">5h Atrás</span>
              </div>
              <div className="noticia-corpo">
                <h3>Preços da soja sobem 5% no mercado internacional</h3>
                <p>Demanda crescente impulsiona valorização do grão brasileiro</p>
              </div>
              <a className="noticia-link">
                Ler mais <ArrowRight size={18} />
              </a>
            </article>

            <article className="noticia-card">
              <div className="noticia-cabecalho">
                <span className="noticia-tag">Política</span>
                <span className="noticia-tempo">9h Atrás</span>
              </div>
              <div className="noticia-corpo">
                <h3>Governo anuncia novo programa de crédito rural</h3>
                <p>R$ 2 Bilhões serão destinados para agricultura sustentável</p>
              </div>
              <a className="noticia-link">
                Ler mais <ArrowRight size={18} />
              </a>
            </article>

            <article className="noticia-card">
              <div className="noticia-cabecalho">
                <span className="noticia-tag">Brasil</span>
                <span className="noticia-tempo">23h Atrás</span>
              </div>
              <div className="noticia-corpo">
                <h3>Qual o papel da agricultura no combate à fome no Brasil?</h3>
                <p>Histórias de moradores de Betânia do Piauí, onde a pobreza e a seca extrema sempre dificultaram o acesso a comida saudável.</p>
              </div>
              <a className="noticia-link">
                Ler mais <ArrowRight size={18} />
              </a>
            </article>
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

export default Noticias