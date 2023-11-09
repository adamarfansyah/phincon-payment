import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import Sidebar from '@components/Sidebar';
import PersonalInfo from '@containers/PaymentContents/PersonalInfo';
import PlanInfo from '@containers/PaymentContents/Plan';
import AddOnsInfo from '@containers/PaymentContents/AddOns';
import SummaryInfo from '@containers/PaymentContents/Summary';

import { setAddons, setDuration, setPlan, setStep, setSummary, setUser } from './actions';
import {
  selectPlan,
  selectStep,
  selectUser,
  selectAddons,
  selectSummary,
  selectSetPlan,
  selectSetAddons,
  selectDuration,
} from './selectors';

import classes from './style.module.scss';

const Payments = ({
  step,
  user,
  plan,
  addons,
  summary: summaryState,
  duration,
  setPlanState,
  setAddonsState,
  intl: { formatMessage },
}) => {
  const dispatch = useDispatch();
  const summary = { setPlanState, setAddonsState, duration };

  const stepHandler = (stepNumber) => {
    dispatch(setStep(stepNumber));
  };

  const handleDuration = (durationTime) => {
    dispatch(setDuration(durationTime));
  };

  const handleUser = (formData) => {
    dispatch(setUser(formData));
    stepHandler(2);
  };

  const handlePlan = (formData) => {
    dispatch(setPlan(formData));
    stepHandler(3);
  };

  const handleAddons = (formData) => {
    dispatch(setAddons(formData));
    stepHandler(4);
  };

  const handleSummary = (formData) => {
    dispatch(setSummary(formData));
    stepHandler(5);
  };

  const generateContent = () => {
    if (step === 1) {
      return (
        <PersonalInfo
          step={step}
          handleSubmit={handleUser}
          user={user}
          title={formatMessage({ id: 'payment_info_title' })}
          desc={formatMessage({ id: 'payment_info_desc' })}
        />
      );
    }
    if (step === 2) {
      return (
        <PlanInfo
          step={step}
          duration={duration}
          handleSubmit={handlePlan}
          handleDuration={handleDuration}
          plan={plan}
          setPlan={setPlanState}
          title={formatMessage({ id: 'payment_paket_title' })}
          desc={formatMessage({ id: 'payment_paket_desc' })}
        />
      );
    }
    if (step === 3) {
      return (
        <AddOnsInfo
          step={step}
          handleSubmit={handleAddons}
          duration={duration}
          addons={addons}
          setAddons={setAddonsState}
          title={formatMessage({ id: 'payment_addons_title' })}
          desc={formatMessage({ id: 'payment_addons_desc' })}
        />
      );
    }
    if (step === 4) {
      return (
        <SummaryInfo
          step={step}
          handleSubmit={handleSummary}
          stepHandler={stepHandler}
          summary={summary}
          summaryState={summaryState}
          title={formatMessage({ id: 'payment_summary_title' })}
          desc={formatMessage({ id: 'payment_summary_desc' })}
        />
      );
    }
  };

  return (
    <div className={classes.paymentsPage}>
      <div className={classes.left}>
        <Sidebar step={step} />
      </div>
      <div className={classes.right}>{generateContent()}</div>
    </div>
  );
};

Payments.propTypes = {
  step: PropTypes.number,
  intl: PropTypes.object,
  user: PropTypes.object,
  plan: PropTypes.array,
  addons: PropTypes.array,
  summary: PropTypes.object,
  duration: PropTypes.string,
  setPlanState: PropTypes.object,
  setAddonsState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  step: selectStep,
  user: selectUser,
  plan: selectPlan,
  addons: selectAddons,
  summary: selectSummary,
  duration: selectDuration,
  setPlanState: selectSetPlan,
  setAddonsState: selectSetAddons,
});

export default injectIntl(connect(mapStateToProps)(Payments));
