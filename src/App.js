import React,{Component} from 'react';
import './App.css';
import { CardList } from '../src/Componenets/Card-List/card-list.component';
import {SearchBox} from '../src/Componenets/search-box/search-box.component'

class App extends Component
{

  constructor()
  {
    super();
    this.state={
     monsters : [],
     searchField:''
    }

    //this.handleChange = this.handleChange.bind(this) //in case we write simple function
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  handleChange = e => {
    this.setState({searchField:e.target.value});
  }

  render()
  {
    const {monsters , searchField} = this.state;
    const filteredList = monsters.filter(monster => 
       monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // const monsters = this.state.monsters;
    // const searcField = thsi.state.searcField;

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeHolder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters = {filteredList}/>
      </div>
    );
  }
}

export default App;
