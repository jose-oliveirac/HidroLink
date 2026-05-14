import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <main className="dashboard-content">
        <section className="cards-top">
          <div className="card">Umidade do solo</div>
          <div className="card">Temperatura</div>
          <div className="card">Umidade do Ar</div>
          <div className="card">Status</div>
        </section>

        <section className="cards-bottom">
          <div className="card large">Recomendação de Irrigação</div>
          <div className="card large">Relatório Semanal</div>
        </section>
      </main>
    </div>
  )
}

export default Home