import { Component } from "react";

// ordre d'execution de React quand ce dernier est initialisé | pour verifier console.log(1) dans constructor, 2 dans render et 3 dans componentDidMount

class App extends Component {
  constructor() {
    // #1 | dans les classe les constructeurs sont toujours lancé en premier
    super();
    this.state = {
      // #1.5 | initialisation de l'état
      monsters: [],
    };
    console.log("1");
  }

  componentDidMount() {
    console.log("3");
    // #3 |  quand le composant vient juste d'être Mount,  (Mount)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          },
        ),
      )
      .catch((error) => console.log("Erreur" + error));
  }

  render() {
    console.log("2");
    // #2 le rendu est le deuxième monté car React doit derminer ce qu'il faut montrer (Mount)
    return (
      <>
        <div className="App">
          <div id="monst" className="text-xl text-center space-y-5 py-5">
            {this.state.monsters.map((monster) => {
              return (
                <div key={monster.id} className="pb-5">
                  <h1>Name : {monster.name}</h1>
                  <h2>Username : {monster.username}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
