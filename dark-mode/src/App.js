// importo useState e useEffect
import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
const getThemeFromLocalStorage = () => {
  if(localStorage.getItem('theme')) {
    return localStorage.getItem('theme')
  }
  return 'light-mode';
}

function App() {
  // imposto con useState il tema al valore trovato in local storage
  const [theme, setTheme] = useState(getThemeFromLocalStorage() || 'light-mode');

  // creo una funzione che cambia il tema con useState
  const setMode = () => {
    if (theme === 'light-mode') {
      return setTheme('dark-mode');
    }
    return setTheme('light-mode');
  }

  // tramite useEffect imposto al tag html il tema che varia in base a setMode
  useEffect(() => {
    document.documentElement.className = theme;
    // salvo il valore del tema in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={setMode}>Cambia</button>
        <section className="article-section">
          {/* richiamo il componente ciclando i dati e passandoli ad articolo */}
          {data.map(el => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
