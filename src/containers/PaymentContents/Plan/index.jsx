import PropTypes from 'prop-types';
import { useState } from 'react';

import CardContainer from '@components/CardContainer';
import Switch from '@mui/material/Switch';
import PlanCard from '@components/PlanCard';
import GoBack from '@components/GoBack';
import classes from './styles.module.scss';

const PlanInfo = ({ setPlan, handleSubmit, title, desc, plan, duration, handleDuration }) => {
  const [formData, setFormData] = useState({
    packetName: setPlan.packetName || plan[0].title,
    price: setPlan.price || 0,
    duration: setPlan.duration || duration,
  });

  const setDuration = duration !== 'monthly';

  const durationChange = () => {
    if (duration === 'yearly') {
      handleDuration('monthly');
    } else {
      handleDuration('yearly');
    }
  };

  return (
    <div>
      <CardContainer title={title} desc={desc}>
        <div className={classes.cardPlans}>
          {plan.map((item) => (
            <div key={item.id}>
              <PlanCard
                data={item}
                duration={duration}
                setFormData={setFormData}
                icon={item.icon}
                formData={formData}
              />
            </div>
          ))}
        </div>
        <div className={classes.switch}>
          <div className={`${classes.duration} ${setDuration ? '' : classes.active}`}>Monthly</div>
          <Switch checked={setDuration} onChange={durationChange} />
          <div className={`${classes.duration} ${!setDuration ? '' : classes.active}`}>Yearly</div>
        </div>
        <div className={classes.btns}>
          <GoBack />
          <button type="button" onClick={() => handleSubmit(formData)} className={classes.btn}>
            Next
          </button>
        </div>
      </CardContainer>
    </div>
  );
};

PlanInfo.propTypes = {
  handleSubmit: PropTypes.func,
  duration: PropTypes.string,
  handleDuration: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  plan: PropTypes.array,
  setPlan: PropTypes.object,
};

export default PlanInfo;
