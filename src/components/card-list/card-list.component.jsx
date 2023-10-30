import { Component } from "react";
import PropTypes from "prop-types";
import Card from "../card/card.component";

class Cardlist extends Component {
  render() {
    const {filteredCats} = this.props;
    
    return (
      <>
        <div id="monst" className="flex flex-wrap justify-center">
            {filteredCats.map((cat) => {
              const {id} = cat
              return (
                <Card key={id} cat={cat}/>
              );
            })}
          </div>
      </>
    );
  }
}

Cardlist.propTypes = {
  filteredCats: PropTypes.any
  };

export default Cardlist;
