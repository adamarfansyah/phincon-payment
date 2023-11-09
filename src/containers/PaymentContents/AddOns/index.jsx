import PropTypes from 'prop-types';
import { useState } from 'react';

import GoBack from '@components/GoBack';
import CardContainer from '@components/CardContainer';
import Checkbox from '@components/Checkbox';
import classes from './styles.module.scss';

const AddOnsInfo = ({ handleSubmit, duration, addons, setAddons, title, desc }) => {
  const [formData, setFormData] = useState(setAddons || []);

  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      setFormData([...formData, item]);
    } else {
      setFormData(formData.filter((data) => data.id !== item.id));
    }
  };

  return (
    <div>
      <CardContainer title={title} desc={desc}>
        <div className={classes.checkboxContents}>
          {addons.map((item) => (
            <Checkbox
              key={item.id}
              data={item}
              duration={duration}
              setFormData={handleCheckboxChange}
              formData={formData}
            />
          ))}
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

AddOnsInfo.propTypes = {
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  addons: PropTypes.array,
  setAddons: PropTypes.array,
  duration: PropTypes.string,
};

export default AddOnsInfo;
