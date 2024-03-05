// Esercitazione 1: UseState Hooks
// - Scrivere una funziona che rimuove da una lista una singola persona, 
// che rimuove tutta la lista o che la ricaricarla.

// <-- Questa esercitazione utilizzerà useState -->

// import useState da react
import React, { useState } from "react";
// import il json data da ./data.js
import data from "./data";

const List = () => {
  // destrutturo l'array useState
  const [people, setPeople] = useState(data);

  // scrivo la funzione che rimuove la singola persona che prenderà in input il suo id
  const deletePerson = (id) => {
    // 1- richiamo la funzione setPeople
    // 2- come parametro passo il metodo filter
    // 3- il metodo filter restituirà la lista di persone senza quella con l'id passato come parametro
    return setPeople(people.filter(el => el.id !== id));
  }

  // scrivo la funzione che ricarica tutti i dati
  const reloadPeople = () => {
    // richiamo la funzione setPeople impostando come valore di people "data"
    setPeople(data);
  }

  // scrivo la funzione per eliminare tutta la lista
  const removeAll = () => {
    // richiamo la funzione setPeople impostanto il valore di people ad un array vuoto
    setPeople([]);
  }

  return (
    <>
      <ul>
        {/* utilizzo il metodo map per mappare l'array people e come cb restituirò una lista del componente Person */}
        {people.map(person =>
          // passo una key univoca ad ogni li ciclato che sarà uguale all'id di ogni singola persona
          <li key={person.id}>
            {/* passerò al componente child l'oggetto person come spread operator e le funzioni */}
            <Person {...person} deletePerson={deletePerson} />
          </li>
        )}
      </ul>
      {/* richiamo le funzioni nei button */}
      <div className="btn-group">
        <button className="btn btn-reset" onClick={reloadPeople}>Reload</button>
        <button className="btn btn-delete" onClick={removeAll}>Delete all</button>
      </div>
    </>
  );
};

const Person = (props) => {
  // destrutturo l'oggetto props
  const { id, nome, stato, img, deletePerson } = props;

  return (
    <article>
      {/* richiamo le proprietà dell'oggetto props */}
      <img src={img} alt="person-img" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          {/* richiamo la funzione passando l'id come parametro con la sintassi () => per attivarla solo al click */}
          <button className="btn btn-remove" onClick={() => deletePerson(id)}>x</button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
