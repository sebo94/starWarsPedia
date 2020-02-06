import React from 'react';
import CharacterList from '../components/CharacterList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        characters: [],
        searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(characters =>  this.setState({ characters:characters.results }));
  }

  render() {
    const { characters, searchField } = this.state;
        const filteredCharacters = characters.filter(character => {
            return character.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        });
    return (
      <div>
        {/*Semantic HTML biatch*/}
        <header className='tc f1 lh-title mt5 mb6'>Welcome to StarWarsPedia!!</header>
        <main>
          <div className="box-2">
            <div className="btn btn-two">
              <span>GET STARTED</span>
             </div>
           </div>
        </main>
      </div>
    );
  }
}

export default App;
