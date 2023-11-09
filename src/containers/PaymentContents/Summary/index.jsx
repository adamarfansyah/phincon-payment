import PropTypes from 'prop-types';

import GoBack from '@components/GoBack';
import CardContainer from '@components/CardContainer';
import classes from './styles.module.scss';
import ThankYou from '../ThankYou';

const SummaryInfo = ({ stepHandler, title, desc, summary, summaryState, handleSubmit }) => {
  const { setPlanState: plan, setAddonsState: addons, duration } = summary;

  const handlePrice = (price) => {
    if (duration === 'monthly') {
      return `$${price}/mo`;
    }
    return `$${price}/yr`;
  };

  const calculateTotalPrice = () => {
    const planPrice = plan.price;
    const addonsPrice = addons.reduce((total, addon) => total + addon.price, 0);

    return planPrice + addonsPrice;
  };

  const isDurationYear = `Total (per ${duration === 'monthly' ? 'month' : 'year'})`;

  if (summaryState.setPlanState) {
    return <ThankYou />;
  }

  return (
    <div>
      <CardContainer title={title} desc={desc}>
        <div className={classes.summary}>
          <div className={classes.wrapper}>
            <div>
              <div className={classes.wrapper__title}>{plan.packetName}</div>
              <div className={classes.link} onClick={() => stepHandler(2)}>
                Change
              </div>
            </div>
            <div className={classes.wrapper__desc}>{handlePrice(plan.price)}</div>
          </div>
          <div className={classes.addons}>
            {addons.map((item, idx) => (
              <div className={classes.addon} key={idx}>
                <div className={classes.addon__title}>{item.title}</div>
                <div className={classes.addon__price}>+{handlePrice(item.price)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.durationYear}>
          <div>{isDurationYear}</div>
          <div className={classes.price}>{handlePrice(calculateTotalPrice())}</div>
        </div>
        <div className={classes.btns}>
          <GoBack />
          <button type="button" onClick={() => handleSubmit(summary)} className={classes.btn}>
            Confirm
          </button>
        </div>
      </CardContainer>
    </div>
  );
};

SummaryInfo.propTypes = {
  stepHandler: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  summary: PropTypes.object,
  summaryState: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default SummaryInfo;
