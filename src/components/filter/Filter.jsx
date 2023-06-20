import PropTypes from 'prop-types';
const Filter = ({handleChange, value}) => {
    
  return (
    <label htmlFor="">
      <input
      value={value}
        type="text"
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Filter;
