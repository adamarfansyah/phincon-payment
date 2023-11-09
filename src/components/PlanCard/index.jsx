import PropTypes from 'prop-types';

import IconArcade from '@static/assets/images/icon-arcade.svg';
import IconPro from '@static/assets/images/icon-pro.svg';
import IconAdvanced from '@static/assets/images/icon-advanced.svg';
import classes from './styles.module.scss';

const PlanCard = ({ setFormData, data, duration, formData }) => {
  const { title, price } = data;

  const handleForm = () => {
    const priceState = duration === 'yearly' ? price.year : price.monthly;
    setFormData({ packetName: data.title, price: priceState, duration });
  };

  const icon = () => {
    if (title === 'Arcade') {
      return <img src={IconArcade} alt="Icon Arcade" />;
    }
    if (title === 'Pro') {
      return <img src={IconPro} alt="Icon Pro" />;
    }
    if (title === 'Advanced') {
      return <img src={IconAdvanced} alt="Icon Advanced" />;
    }
  };

  return (
    <div
      className={`${classes.planCard} ${
        formData.packetName === title && formData.duration === duration ? classes.active : ''
      }`}
      onClick={() => handleForm()}
    >
      <div className={classes.icon}>{icon()}</div>
      <div className={classes.wrapper}>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{duration === 'yearly' ? `$${price.year}/yr` : `$${price.monthly}/mo`}</div>
        <div className={classes.time}>{duration === 'yearly' ? '2 months free' : ''}</div>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  data: PropTypes.object,
  setFormData: PropTypes.func,
  formData: PropTypes.object,
  duration: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

export default PlanCard;
