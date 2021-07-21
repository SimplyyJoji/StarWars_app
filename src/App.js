import './App.css';
import { Router,navigate } from '@reach/router'; 
import StarPeople from './views/StarPeople';
import StarPlanet from './views/StarPlanet';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("planets");//useState is planets because it needs a default place if we refresh 
  const [id, setID] = useState("");

  const onChangePage = (e) => {
    setCategory(e.target.value);
    console.log(setCategory)
  }

  const onChangeId = (e) => {
    setID(e.target.value);
  }

  return (
    <div>
      <header>
        <nav>
        <label>Choose a Category</label>
      <select onChange={onChangePage}>
        <option value="planets">Planets</option>
        <option value="people">People</option>
      </select>
      <label>Choose a number</label>
      <input type="text" name="id" onInput={onChangeId}></input>
      <button onClick={() => navigate(`/${category}/${id}`)}>Lets go</button>
        </nav>
      </header>
      <Router>
        <StarPeople path="/people/:id" />
        <StarPlanet path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
