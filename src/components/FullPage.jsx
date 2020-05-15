import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';

import './SectionFirst/styles.scss';
import './SectionFirst/overrides.scss';
import SectionFirst from './SectionFirst/SectionFirst';

export const Fullpage = () => (
  <ReactFullpage
    navigation
    sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <SectionFirst content={'Slide down!'} />
          <SectionFirst content={'Keep going!'} />
          <SectionFirst content={'Slide up!'} />
        </div>
      );
    }}
  />
);
