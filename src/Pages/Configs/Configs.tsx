import './Configs.css'
import { useState } from 'react'
import {
  User,
  Bell,
  Cpu,
  SlidersHorizontal,
  AlertTriangle,
  Moon,
  RefreshCw,
  Lock,
  KeyRound,
  Download,
  FileText,
  Trash2,
  ChevronDown,
  LifeBuoy,
} from 'lucide-react'

type Aba = 'perfil' | 'notificacoes' | 'sensores' | 'sistema'

const abas = [
  { id: 'perfil', label: 'Perfil', icon: User },
  { id: 'notificacoes', label: 'Notificações', icon: Bell },
  { id: 'sensores', label: 'Sensores', icon: Cpu },
  { id: 'sistema', label: 'Sistema', icon: SlidersHorizontal },
] as const

// Toggle reutilizável 
type ToggleProps = {
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

function Toggle({ checked, onChange, disabled = false }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`toggle ${checked ? 'toggle-on' : ''} ${disabled ? 'toggle-disabled' : ''}`}
    >
      <span className="toggle-bolinha" />
    </button>
  )
}

function Configs() {
  const [abaAtiva, setAbaAtiva] = useState<Aba>('sistema')

  // Estado da aba Sistema
  const [modoEscuro, setModoEscuro] = useState(false) // ainda em desenvolvimento
  const [syncAuto, setSyncAuto] = useState(true)
  const [idioma, setIdioma] = useState('pt-BR')
  const [fuso, setFuso] = useState('America/Sao_Paulo')
  const [unidade, setUnidade] = useState('metrico')

  return (
    <div className="config-container">
      {/* Pílula "Configurações" */}
      <div className="config-titulo-pill">
        <SlidersHorizontal size={20} />
        Configurações
      </div>

      {/* Sub-abas */}
      <div className="config-abas">
        {abas.map((aba) => {
          const Icone = aba.icon
          const ativa = abaAtiva === aba.id
          return (
            <button
              key={aba.id}
              type="button"
              className={`config-aba ${ativa ? 'config-aba-ativa' : ''}`}
              onClick={() => setAbaAtiva(aba.id)}
            >
              <Icone size={18} />
              {aba.label}
            </button>
          )
        })}
      </div>

      {/* Conteúdo */}
      <div className="config-card">
        {abaAtiva === 'sistema' && (
          <SecaoSistema
            modoEscuro={modoEscuro}
            setModoEscuro={setModoEscuro}
            syncAuto={syncAuto}
            setSyncAuto={setSyncAuto}
            idioma={idioma}
            setIdioma={setIdioma}
            fuso={fuso}
            setFuso={setFuso}
            unidade={unidade}
            setUnidade={setUnidade}
          />
        )}

        {abaAtiva === 'perfil' && (
          <SecaoPlaceholder titulo="Perfil" />
        )}
        {abaAtiva === 'notificacoes' && (
          <SecaoPlaceholder titulo="Notificações" />
        )}
        {abaAtiva === 'sensores' && (
          <SecaoPlaceholder titulo="Sensores" />
        )}
      </div>

      {/* Suporte + rodapé */}
      <p className="config-suporte">
        Ainda em dúvida? chame o nosso <a href="#suporte">Suporte</a>
      </p>

      <footer className="config-footer">
        <p>© 2025 HidroLink — Sigma Code Team</p>
        <p>Tecnologia para agricultura sustentável</p>
      </footer>
    </div>
  )
}

// --- Aba Sistema (a do Figma) ---
type SecaoSistemaProps = {
  modoEscuro: boolean
  setModoEscuro: (v: boolean) => void
  syncAuto: boolean
  setSyncAuto: (v: boolean) => void
  idioma: string
  setIdioma: (v: string) => void
  fuso: string
  setFuso: (v: string) => void
  unidade: string
  setUnidade: (v: string) => void
}

function SecaoSistema({
  modoEscuro,
  setModoEscuro,
  syncAuto,
  setSyncAuto,
  idioma,
  setIdioma,
  fuso,
  setFuso,
  unidade,
  setUnidade,
}: SecaoSistemaProps) {
  return (
    <>
      <div className="secao-cabecalho">
        <h2 className="secao-titulo">Configuração do sistema</h2>
        <span className="badge-aviso">
          <AlertTriangle size={16} />
          Atenção! Mecanismo ainda em desenvolvimento
        </span>
      </div>
      <p className="secao-subtitulo">Preferências gerais do aplicativo</p>

      {/* Toggles */}
      <div className="linha-config">
        <div className="linha-config-icone">
          <Moon size={20} />
        </div>
        <div className="linha-config-texto">
          <span className="linha-config-label">Modo escuro (em desenvolvimento)</span>
          <span className="linha-config-desc">Ativar modo escuro do aplicativo</span>
        </div>
        <Toggle
          checked={modoEscuro}
          onChange={() => setModoEscuro(!modoEscuro)}
          disabled
        />
      </div>

      <div className="linha-config">
        <div className="linha-config-icone">
          <RefreshCw size={20} />
        </div>
        <div className="linha-config-texto">
          <span className="linha-config-label">Sincronização automática</span>
          <span className="linha-config-desc">Sincronizar dados automaticamente</span>
        </div>
        <Toggle checked={syncAuto} onChange={() => setSyncAuto(!syncAuto)} />
      </div>

      {/* Selects */}
      <div className="campo-select">
        <label htmlFor="idioma">Idioma</label>
        <div className="select-wrapper">
          <select id="idioma" value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español</option>
          </select>
          <ChevronDown size={18} className="select-chevron" />
        </div>
      </div>

      <div className="campo-select">
        <label htmlFor="fuso">Fuso horário</label>
        <div className="select-wrapper">
          <select id="fuso" value={fuso} onChange={(e) => setFuso(e.target.value)}>
            <option value="America/Sao_Paulo">América/São Paulo (GMT -3)</option>
            <option value="America/Manaus">América/Manaus (GMT -4)</option>
            <option value="America/Noronha">América/Noronha (GMT -2)</option>
          </select>
          <ChevronDown size={18} className="select-chevron" />
        </div>
      </div>

      <div className="campo-select">
        <label htmlFor="unidade">Unidades de medida</label>
        <div className="select-wrapper">
          <select id="unidade" value={unidade} onChange={(e) => setUnidade(e.target.value)}>
            <option value="metrico">Métrico (°C, mm, L)</option>
            <option value="imperial">Imperial (°F, in, gal)</option>
          </select>
          <ChevronDown size={18} className="select-chevron" />
        </div>
      </div>

      {/* Segurança e Privacidade */}
      <div className="divisor" />
      <h3 className="secao-grupo">
        <Lock size={18} />
        Segurança e Privacidade
      </h3>

      <button type="button" className="linha-acao">
        <KeyRound size={18} />
        Alterar Senha
      </button>
      <button type="button" className="linha-acao">
        <Download size={18} />
        Exportar meus dados
      </button>
      <button type="button" className="linha-acao">
        <FileText size={18} />
        Política de Privacidade
      </button>

      {/* Zona de perigo */}
      <div className="divisor" />
      <h3 className="secao-grupo">Zona de perigo</h3>
      <button type="button" className="linha-acao linha-acao-perigo">
        <Trash2 size={18} />
        Resetar todas as configurações
      </button>

      {/* Salvar */}
      <div className="config-salvar-wrapper">
        <button type="button" className="config-salvar">
          Salvar alterações
        </button>
      </div>
    </>
  )
}

// Placeholder para abas ainda não construídas 
function SecaoPlaceholder({ titulo }: { titulo: string }) {
  return (
    <div className="secao-placeholder">
      <LifeBuoy size={32} />
      <p>A aba <strong>{titulo}</strong> ainda está em construção.</p>
    </div>
  )
}

export default Configs