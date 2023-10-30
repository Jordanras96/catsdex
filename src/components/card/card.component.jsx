import { Component } from "react";
import PropTypes from "prop-types";

export default class Card extends Component {
  render() {
    const { id, email, name } = this.props.cat;
    return (
      <div
        key={id}
        className="w-1/4 flex flex-col items-center bg-[#95dada] border border-gray-300 rounded cursor-pointer hover:scale-105 transform transition-transform duration-250 m-6 py-5 shadow-lg hover:drop-shadow-sm hover:shadow-[#95dada]"
      >
        <img alt={`cat ${name}`} src={`https://robohash.org/${id}?set=set4`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

Card.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
