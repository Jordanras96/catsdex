import { Component } from "react";
import Cardlist from "./components/card-list/card-list.component";
import './App.css';
//**? Optimisation => optimisation lecture, optimisation lecture*/
//*  c'est une fonction anonyme car elle n'est stocké nulle part, elle sera render à chaque fois puis jeté et ne garde aucune trace et cela rend l'application moins performant | il faut alors mettre la méthode hors du composant*/
{
  /* <input
              id="search-box"
              type="search"
              className="placeholder:px-2 bg-gray-500 text-white px-2 focus:rounded-none"
              placeholder="tape here"
              onChange={(event) => {
                const searchField = event.target.value.toLocaleLowerCase();
                this.setState(() => {
                  return { searchField };
                });
              }}
            /> */
}
//**enlever l'appelation des this à chaque fois pour optimiser la lecture*/
// this.state.monsters | this.state.searchField | this.state.onSearchChange
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {}
        )
      )
      .catch((error) => console.log("Error" + error));
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    
    const { monsters, searchField } = this.state; // monsters sera alors defini comme il y avait déjà un this.state.monster | et searchField sera alors défini comme il y avait déjà un this.state.searchField
    const { onSearchChange } = this; // onSearchCahnge peut alors être appelé sans this, car le fait de l'appeler onSearchChange est semblable à this.onSearchChange
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <>
        <div className="App">
          <div id="title" className="text-3xl text-center uppercase">
            Monsters Rolodex
          </div>
         
          <div className="text-center py-10">
            <label className="label label-left flex flex-col text-gray-300">
              Search Monster
            </label>
            <input
              id="search-box"
              type="search"
              className="placeholder:px-2 bg-gray-500 text-white px-2 focus:rounded-none"
              placeholder="tape here"
              onChange={onSearchChange}
            />
          </div>
          {/* <div id="monst" className="text-xl text-center space-y-5 py-5">
            {filteredMonsters.map((monster) => {
              return (
                <div key={monster.id} className="pb-5">
                  <h1>{monster.name}</h1>
                </div>
              );
            })}
          </div> */}
          <Cardlist filteredMonsters = {filteredMonsters} />
        </div>
      </>
    );
  }
}

export default App;
