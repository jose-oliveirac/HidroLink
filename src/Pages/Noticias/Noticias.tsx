import './Noticias.css'
import { ArrowRight } from 'lucide-react'
import { noticias } from '../../mocks/dados'

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
            {noticias.map((noticia) => (
              <article className="noticia-card" key={noticia.titulo}>
                <div className="noticia-cabecalho">
                  <span className="noticia-tag">{noticia.tag}</span>
                  <span className="noticia-tempo">{noticia.tempo}</span>
                </div>
                <div className="noticia-corpo">
                  <h3>{noticia.titulo}</h3>
                  <p>{noticia.resumo}</p>
                </div>
                {/* Trocar o href pelo link real da notícia quando vier da API */}
                <a className="noticia-link" href="#">
                  Ler mais <ArrowRight size={18} />
                </a>
              </article>
            ))}
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

export default Noticias
