import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const StepCard = ({ title, desc, number, step }) => (
  <div className={classes.stepCard}>
    <div className={`${classes.number} ${step === number ? classes.active : ''}`}>{number}</div>
    <div className={classes.stepCard__wrapper}>
      <div className={classes.desc}>{desc}</div>
      <div className={classes.title}>{title}</div>
    </div>
  </div>
);

StepCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  number: PropTypes.number,
  step: PropTypes.number,
};

export default StepCard;
