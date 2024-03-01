import List from "./List";

function App() {
  return (
    <div className="App container">
      <h1 style={{color: "var(--bg-blue)"}}>Esercitazione Appuntamenti</h1>
      <div className="people-list">
        {/* richiamo il componente list */}
        <List />
      </div>
    </div>
  );
}

export default App;
