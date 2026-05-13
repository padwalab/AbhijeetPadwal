import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Abhijeet Padwal</h1>
        <p>Resume</p>
        <a href="/AbhijeetPadwal-Resume.pdf" target="_blank" rel="noreferrer">
          Open or Download PDF
        </a>
      </header>

      <section className="resume-viewer" aria-label="Resume preview">
        <iframe
          title="Abhijeet Padwal Resume"
          src="/AbhijeetPadwal-Resume.pdf#toolbar=1&navpanes=0"
        />
      </section>
    </main>
  )
}

export default App
