import { PropTypes } from "prop-types";

export const Filter = ({ filter, onChange }) => {
    return (
      <div>
        <label> Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          placeholder="search"
        />
      </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};