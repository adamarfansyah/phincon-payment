import { useDispatch } from 'react-redux';
import { setDecStep } from '@pages/Payments/actions';
import classes from './styles.module.scss';

const GoBack = () => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setDecStep())} className={classes.goback}>
      Go Back
    </div>
  );
};

export default GoBack;
