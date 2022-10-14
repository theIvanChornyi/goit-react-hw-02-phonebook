import PropTypes from 'prop-types';
export const Filter = ({ onFilterContacts }) => {
  return (
    <label>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        onInput={e => {
          onFilterContacts(e.target.value);
        }}
      ></input>
    </label>
  );
};
Filter.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
};
