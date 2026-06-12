import './ModalConfirmacao.css'
import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

type ModalConfirmacaoProps = {
  aberto: boolean
  onFechar: () => void
  titulo?: string
  mensagem?: string
  textoBotao?: string
}

function ModalConfirmacao({
  aberto,
  onFechar,
  titulo = 'Agendamento confirmado!',
  mensagem = 'Sua irrigação foi agendada com sucesso.',
  textoBotao = 'Entendi',
}: ModalConfirmacaoProps) {
  // Fecha o modal ao apertar ESC
  useEffect(() => {
    if (!aberto) return

    const aoApertarTecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFechar()
    }

    window.addEventListener('keydown', aoApertarTecla)
    return () => window.removeEventListener('keydown', aoApertarTecla)
  }, [aberto, onFechar])

  // Se não estiver aberto, não renderiza nada
  if (!aberto) return null

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
      >
        <button
          type="button"
          className="modal-fechar-x"
          onClick={onFechar}
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="modal-icone">
          <CheckCircle2 size={56} />
        </div>

        <h2 id="modal-titulo" className="modal-titulo">
          {titulo}
        </h2>
        <p className="modal-mensagem">{mensagem}</p>

        <button type="button" className="modal-botao" onClick={onFechar}>
          {textoBotao}
        </button>
      </div>
    </div>
  )
}

export default ModalConfirmacao