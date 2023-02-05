import React from 'react';
import './utils/_normalize.scss';
import { Header } from './components/Header';
import { Main } from './components/Main';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
