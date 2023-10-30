import { Component } from "react";

// MR - Component State et setState
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "John",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1 className="text-3xl text-center uppercase">State</h1>
//         <p>Hi, {this.state.name}</p>
//         <button
//           onClick={() => {
//             this.setState({ name: 'Smith'})
//           }}
//           className="button btn"
//         >
//           change name
//         </button>
//       </div>
//     );
//   }
// }

//State & Shallow Merge | setState & Secondary Callback
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "John", lastName: "Doe" }, // c'est devenu un objet donc là où on l'invoque ne peut plus être un string mais doit être aussi un objet
      company: "ZTM",
    };
  }
  render() {
    return (
      <div className="App">
        <h1 className="text-3xl text-center uppercase">State</h1>
        <span>
          Hi, {this.state.name.firstName} {this.state.name.lastName} work at{" "}
          {this.state.company}
        </span>
        <br />
        <button
          onClick={() => {
            // c'est le meilleur moyen d'écrire un state dans une class component
            this.setState(
              // on y a appeller deux fonction, la première est une fonction normal et la deuxième est automatiquement un Callback
              () => {
                return {
                  // c'est cette objet qui va faire un shallow merge ou fusion superficiel
                  name: { firstName: "Will", lastName: "Smith" },
                };
              },
              () => {
                console.log(this.state); // cette deuxième est un callback donc c'est une tâche asynchrone pour permettre à react de changer l'état avant de l'afficher sur la console | sinon, info sur console sera toujours l'état avant le changement
              }
            );
          }}
          className="button"
        >
          change name
        </button>
      </div>
    );
  }
}

// Mapping Arrays to Elements | Keys for Mapping

export default App;
