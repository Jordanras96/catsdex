import { Component } from "react";

// *? filter | searching | inputbox | storing original Data
//*! methode 1
// class App extends Component {
//   constructor() {
//     super();
//     this.state = { //** créer deux tableau, le premier servira pour le filter afin de rechercher le nom de monstre |||| le deuxième servira pour map afin d'afficher tous les noms  */
//       originalMonsters: [],
//       monsters: [],
//     };
//     // console.log("constructor");
//   }

//   componentDidMount() {
//     // console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {
//               originalMonsters: users,
//               monsters: users,
//             };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         )
//       )
//       .catch((error) => console.log("Erreur" + error));
//   }

//   render() {
//     // console.log("render");
//     return (
//       <>
//         <div className="App">
//           <div id="title" className="text-3xl text-center uppercase">
//             Monsters Rolodex
//           </div>
//           <div className="text-center py-10">
//             <label className="label label-left flex flex-col text-gray-300">
//               Search Monster
//             </label>
//             <input
//               id="search-box"
//               type="search"
//               className="placeholder:px-2"
//               placeholder="tape here"
//               onChange={(event) => {
//                 // console.log({startingArray : this.state.monsters}) //**  1# verification du changement du tableau monsters avant de taper dans l'input | le but est de faire réapparaitre les noms après avoir effacer le filtre */
//                 const lowerMonster = event.target.value.toLocaleLowerCase();
//                 const filteredMonsters = this.state.originalMonsters.filter(  //**!  pourquoi ne pas utiliser this.state.monster | filter ne renvoie qu'un tableau dèja filtrer, il filtre un tableau à chaque fois qu'on tape sur input et par exemple => input vide =>  Arr1 = ['abcd','bacd','bcd', 'acd'] => input a => Arr2 = ['abcd','bda', 'acd']=> input ac => Arr 3 = ['abcd', 'acd'] => input vide => Arr4 = ['abcd', 'acd'], le tableau ne revient plus à Arr1 car Arr1 n'existe plus, le tips et de créer un Arr de base et un Arr de filtre, là, même si on filtre Arr de base reste la référence et on peut revenir à Arr2 et Arr1*/
//                   (monster) => {
//                     return monster.name.toLocaleLowerCase().includes(lowerMonster);
//                   }
//                 );
//                 this.setState(() => {
//                   return { monsters: filteredMonsters };
//                 },
//                 () => {
//                   // console.log({endingArray: this.state.monsters}) //** 1# verification du changement du tableau après avoir tapé dans l'input */
//                 }
//                 );
//               }}
//             />
//           </div>
//           <div id="monst" className="text-xl text-center space-y-5 py-5">
//             {this.state.monsters.map((monster) => {
//               return (
//                 <div key={monster.id} className="pb-5">
//                   <h1>{monster.name}</h1>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

//*! method 2
//** nous allons definir la valeur de l'input en tant qu'état pour pouvoir l'utiliser dans tout le code. | filteredMonsters sera alors en dehors du return et nous utiliserons monster pour êtres filtrer | de la même manière filteredMonsters sera map avant d''etre filtre pour avoir deux tableau, le Arr mappé sera tous les nom et le Arr filtrer sera seulement celui dans l'input | nous mettons seulement searchField en setState pour que JS comprenne que la valeur taper en input sera une nouvelle valeur à inserer comme filtre | le fait | cette methode permet de ne pas créer de tableau à chaque fois dans this.state pour chaque filtre (supprimer, ajouter ...) mais de simplement utiliser searchFiled et filtredMonsters à chaque fois | cette methode est basé sur le stockage dans State pour garder une trace et pour réavoir une liste complete*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [], // à modifier dans l'input car nous voulons avoir accès à la valeur de l'input
      searchField: '' //
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
      .catch((error) => console.log("Erreur" + error));
  }

  render() {
    
    const filteredMonsters = this.state.monsters.filter( // 3# nous filtrons ici la liste original des monstre
      (monster) => {
        return monster.name
          .toLocaleLowerCase()
          .includes(this.state.searchField);
      }
    )
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
              onChange={(event) => {
                const searchField = event.target.value.toLocaleLowerCase(); // 2# nous stockons la valeur (qui est un string mais pas l'événement) puis nous le mettant dans un state (pour casser le scope local de cette variable et le faire avoir un scope global) pour que le reste du composant y ait accès
                this.setState(() => {
                  return { searchField }; //** monster affiché change en fonction de l'input ici*/
                });
              }}
            />
          </div>
          <div id="monst" className="text-xl text-center space-y-5 py-5">
            {filteredMonsters.map((monster) => {
              return (
                <div key={monster.id} className="pb-5">
                  <h1>{monster.name}</h1>
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
