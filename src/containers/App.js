import React from 'react';
import CharacterList from '../components/CharacterList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        characters: [],
        searchField: '',
        showList: false,
        page: 1,
        toRender: null,
        searchBar: "closed"
    }
  }

  displayCharacters = () => {
    this.setState({
      showList: true 
    });
  }

  handleScroll = e => {
    const bottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) <= 3.0;
    // eslint-disable-next-line no-unused-expressions
    bottom ? this.loadUsers(this.state) : null;
  }

  loadUsers = state => {
    const { page, toRender, characters } = state;
    if (toRender > 0 || toRender === null) {
      fetch(`https://swapi.co/api/people/?page=${page}`)
      .then(response => response.json())
      .then(data =>  this.setState({ 
        characters: characters.concat(data.results),
        page: page + 1,
        toRender: Math.ceil(data.count / 10 - page) 
      }));
    }
  };

  onSearchChange = event => {
    this.setState({
        searchField: event.target.value
    });
  } 

  componentDidMount() {
    this.loadUsers(this.state);
  }

  render() {

    /* FILTERING CHARACTERS */

    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    });

    return (
      <div>
        {/*Semantic HTML biatch*/}
        <main className="tc ma6">
        {
          !this.state.showList ?
          <div className="starwars-demo">
            <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
            <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
            <div className="box-2">
              <div className="btn btn-two">
                <span onClick={this.displayCharacters}>GET STARTED</span>
              </div>
            </div>
          </div>
          :
          <div onScroll={this.handleScroll}>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll >
              <ErrorBoundry>
                <CharacterList characters={filteredCharacters}/>
              </ErrorBoundry>
            </Scroll>
          </div>
        }
        </main>
      </div>
    );
  }
}

export default App;
