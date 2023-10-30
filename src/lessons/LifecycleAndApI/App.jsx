import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    // faire une action dès que react fini de monter la page
    fetch("https://jsonplaceholder.typicode.com/users") // nous appelons via fetch l'URL de l'API
      .then(
        (
          response // then c'est pour indiquer que si l'URL repond alors il nous montre en consolelog
        ) => response.json() // on converti la reponse en Json pour qu'on puisse l'utiliser
      )
      .then(
        (
          users // on appelle users pour avoir les information retranscrit en Json | on peut vérifier après avec console.log
        ) =>
          this.setState(
            () => {
              return { monsters: users }; // on assigne users à monsters pour faire apparaitre dans le HTML
            },
            () => {
              // on peut faire une verification avec un callBack en console.log
              console.log(this.state);
            }
          )
      )
      .catch((error) => console.log("Erreur" + error)); // si l'API ne repond pas alors envoyer une erreur dans la console
  }

  render() {
    return (
      <>
        <div className="App">
          <div id="monst" className="text-3xl text-center space-y-5 py-5">
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
