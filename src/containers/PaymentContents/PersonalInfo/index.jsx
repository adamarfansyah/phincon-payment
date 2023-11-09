import PropTypes from 'prop-types';
import { useState } from 'react';

import CardContainer from '@components/CardContainer';
import Input from '@components/Input';
import classes from './styles.module.scss';

const PersonalInfo = ({ handleSubmit, title, desc, user }) => {
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div>
        <CardContainer title={title} desc={desc}>
          <Input
            label="Name"
            placeholder="e.g Stephen King"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Email Address"
            placeholder="e.g stephenking@lorem.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            label="Phone Number"
            placeholder="e.g +1 234 567 890"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </CardContainer>
      </div>
      <div>
        <button type="button" onClick={() => handleSubmit(formData)} className={classes.btn}>
          Next
        </button>
      </div>
    </>
  );
};

PersonalInfo.propTypes = {
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  user: PropTypes.object,
};

export default PersonalInfo;
