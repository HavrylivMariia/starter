import './App.css'

const HERO = {
  name: "Mariia",
  age: "**",
  ph: "(+380)987777777",
  hobby: "tenis",
}

function App() {

  return (
    <div className="App">
      <header>
        <h2>My life</h2>
      </header>
      <main>
        <article>
          <p> My name is {HERO.name}. I like {HERO.hobby}.</p>
        </article>
      </main>
      <footer>
        <ul>Contacts:
          <li>{HERO.ph}</li>
        </ul>  
      </footer>

    </div>
  )
}

export default App
