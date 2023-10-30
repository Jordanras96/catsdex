import { Component } from "react";
import PropTypes from "prop-types";
import Cardlist from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            cats: users,
          };
        })
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
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredCats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <>
        <div className="App">
        <h1 className="text-white uppercase text-5xl mt-10 mb-5 font-kittenSlant">Cats Dex</h1>
          <SearchBox
            onChangeHandler={onSearchChange}
            id="search-box"
            className="border border-gray-300 focus:outline-none focus:border-blue-500 p-2 w-40 h-10 mb-8 rounded-lg"
            placeholder="tape here"
          />
          <div className="container mx-auto ">
          <Cardlist filteredCats={filteredCats} />
          </div>
        </div>
      </>
    );
  }
}
// 
App.propTypes = {
  className: PropTypes.string,
};
export default App;
