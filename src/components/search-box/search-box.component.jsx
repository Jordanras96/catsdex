import { Component } from "react";
import PropTypes from "prop-types";

export default class SearchBox extends Component {
  render() {
    const {onChangeHandler, id, className, placeholder} = this.props
    return (
      <>
        <div className="text-center py-5">
          <input
            id={id}
            type="search"
            className={`searchInput ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
          />
        </div>
      </>
    );
  }
}

SearchBox.propTypes = {
    onChangeHandler: PropTypes.any,
    id: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    };