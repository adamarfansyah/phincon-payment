/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Input = ({ label, value, placeholder, onChange, name, required, ...rest }) => (
  <div className={classes.inputCustom}>
    <label>{label}</label>
    <input
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required={required}
      {...rest}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  rest: PropTypes.any,
};

export default Input;
