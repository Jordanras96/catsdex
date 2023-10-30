import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Linda",
        },
        {
          id: 2,
          name: "Frank",
        },
        {
          id: 3,
          name: "Jacky",
        },
      ],
    };
  }
  render() {
    const monsterElement = this.state.monsters.map((monster) => (
      <h1 key={monster.id}>{monster.name}</h1>
    ));

    return (
      <>
        <div className="App">
          <div id="monsters" className="text-3xl text-center space-y-5 py-5">
            {monsterElement}
          </div>
        </div>
      </>
    );
  }
}

export default App;
