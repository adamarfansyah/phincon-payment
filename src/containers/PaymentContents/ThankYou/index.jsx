import { FormattedMessage } from 'react-intl';

import ThankYouIcon from '@static/assets/images/icon-thank-you.svg';
import classes from './styles.module.scss';

const ThankYou = () => (
  <div className={classes.thankYou}>
    <img src={ThankYouIcon} alt="Thank you" />
    <div className={classes.title}>
      <FormattedMessage id="thanks_title" />
    </div>
    <div className={classes.desc}>
      <FormattedMessage id="thanks_desc" />
    </div>
  </div>
);

export default ThankYou;
