import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label, Container } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Container>
    <Label>
      Filtr by Name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </Container>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

