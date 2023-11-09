import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const CardContainer = ({ children, title, desc }) => (
  <div>
    <div className={classes.right}>
      <div className={classes.wrapper}>
        <div className={classes.title}>{title}</div>
        <div className={classes.desc}>{desc}</div>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

CardContainer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default CardContainer;
