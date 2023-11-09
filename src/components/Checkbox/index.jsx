import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const Checkbox = ({ data, duration, setFormData, formData }) => {
  const { id, title, desc, price } = data;

  const priceByDuration = duration === 'yearly' ? `$${price.year}/yr` : `$${price.monthly}/mo`;
  const priceFilter = duration === 'yearly' ? price.year : price.monthly;
  const isCheckboxChecked = formData.some((item) => item.title === title);

  const handleCheckBox = (e) => {
    const form = {
      id,
      title,
      desc,
      price: priceFilter,
    };
    setFormData(form, e.target.checked);
  };

  return (
    <div className={`${classes.checkbox} ${isCheckboxChecked ? classes.active : ''}`}>
      <div className={classes.wrapper}>
        <input
          type="checkbox"
          checked={isCheckboxChecked}
          name={title}
          value={title}
          className={classes.input}
          onClick={(e) => handleCheckBox(e)}
        />
        <div>
          <div className={classes.title}>{title}</div>
          <div className={classes.desc}>{desc}</div>
        </div>
      </div>
      <div className={classes.duration}>{priceByDuration}</div>
    </div>
  );
};

Checkbox.propTypes = {
  data: PropTypes,
  duration: PropTypes.string,
  setFormData: PropTypes.func,
  formData: PropTypes.object,
};

export default Checkbox;
