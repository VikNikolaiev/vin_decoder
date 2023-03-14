import React from 'react';
import './Loader.scss';
import RobotPreloader from '@avtopro/preloader/dist/index';

export const Loader = () => (
  // <div className="Loader" data-cy="loader">
  //   <div className="Loader__content" />
  // </div>
  <RobotPreloader title="Loading..." />
);
