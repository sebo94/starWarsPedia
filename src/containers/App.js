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
        toRender: null
    }
  }

  displayCharacters = () => {
    this.setState({
      showList: true 
    });
  }

  handleScroll = e => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("fetching users, to render " + this.state.toRender);
      this.loadUsers(this.state);
    } else if (this.state.toRender === 1) {
      this.loadUsers(this.state);
    }
  }

  loadUsers = state => {
    const { page, toRender, characters } = state;
    console.log(page, toRender)
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

  componentDidMount() {
    this.loadUsers(this.state);
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
        <main className="tc ma6">
        {
          !this.state.showList ?
          <div className="box-2">
            <div className="btn btn-two">
              <span onClick={this.displayCharacters}>GET STARTED</span>
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
