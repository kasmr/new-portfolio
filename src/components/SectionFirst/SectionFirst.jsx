import React from 'react';
import './styles.scss';
import './overrides.scss';

const SectionFirst = ({ content }) => {
  return (
    <div className='section'>
      <h3>{content}</h3>
    </div>
  );
};

export default SectionFirst;
