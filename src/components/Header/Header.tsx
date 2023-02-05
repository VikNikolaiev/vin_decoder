import React, { FC } from 'react';
import './Header.scss';
import vinDecoderLogo from '../../img/vinDecoderLogo.png';

import { PageNavLink } from '../PageNavLink';

export const Header: FC = () => {
  return (
    <header className="header">
      <a className="logo" href="/">
        <img alt="vinDecoder" src={vinDecoderLogo} />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <PageNavLink to="/" text="HomePage" />
          </li>
          <li className="nav__item">
            <PageNavLink to="/variables" text="Vehicle Variables" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
