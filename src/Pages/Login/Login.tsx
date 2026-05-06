import './Login.css'


function Login() {
  return (
    <>
      <main>
        <div className="container-bem-vindo">
          <img src="../public/assets/images/logo_horizontal.png" alt="logo HidroLink Horizontal" className="logo-centralizada"/>
          <h1 className="bem-vindo">Bem-vindo a HidroLink!</h1>
          <p className="subtitle">
            Gestão inteligente de recursos hídricos para agricultura familiar
          </p>
        </div>

        <div className="caixa-login">
          <h2 className="fazer-login">Fazer Login</h2>
          <h4 className="subtitle-2">entre com suas credenciais para acessar o sistema</h4>

          <form className="formulario-login">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="seu@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Digite sua senha" />
            </div>
            <button type="submit" className="btn-entrar">Entrar</button>
          </form>

          <div className="links-ajuda">
            <a href="">Criar conta</a>
            <a href="">Esqueceu a senha?</a>
          </div>

           <div className='conta-google'>
           {/* aqui futuramente colocar o botão do google (logar com o google)! */}
        </div>
        </div>
      

      <p className="creditos-licencas">© 2025 Hidrolink - Sigma Code Team</p>
      <p className="subtitle-creditos">Tecnologia para agricultura sustentável</p>
      </main>
    </>
    
  )
}

export default Login