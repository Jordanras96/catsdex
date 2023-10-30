import { Component } from "react";
import PropTypes from "prop-types";

class Cardlist extends Component {
  render() {
    // console.log('render from cardList')
    const {filteredMonsters} = this.props;
    return (
      <>
        <div id="monst" className="text-xl text-center space-y-5 py-5">
            {filteredMonsters.map((monster) => {
              return (
                <div key={monster.id} className="pb-5">
                  <h1>{monster.name}</h1>
                </div>
              );
            })}
          </div>
      </>
    );
  }
}

Cardlist.propTypes = {
  filteredMonsters: PropTypes.any
  };

export default Cardlist;
