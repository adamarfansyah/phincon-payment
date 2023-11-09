import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import StepCard from '@components/StepCard';
import classes from './styles.module.scss';

const STEPS = [
  {
    step: 1,
    title: 'sidebar_info_title',
    desc: 'sidebar_info_step',
  },
  {
    step: 2,
    title: 'sidebar_paket_title',
    desc: 'sidebar_paket_step',
  },
  {
    step: 3,
    title: 'sidebar_addons_title',
    desc: 'sidebar_addons_step',
  },
  {
    step: 4,
    title: 'sidebar_summary_title',
    desc: 'sidebar_summary_step',
  },
];

const Sidebar = ({ step, intl: { formatMessage } }) => (
  <div className={classes.sidebar}>
    <div className={classes.sidebarBg}>
      <div className={classes.sidebarLink}>
        {STEPS.map((item) => (
          <div key={item.step}>
            <StepCard
              title={formatMessage({ id: item.title })}
              desc={formatMessage({ id: item.desc })}
              number={item.step}
              step={step}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  step: PropTypes.number,
  intl: PropTypes.object,
};

export default injectIntl(Sidebar);
