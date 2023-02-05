import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  to: string;
  text: string;
}
export const PageNavLink:FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      'nav__link',
      {
        'is-active': isActive,
      },
    )}

  >
    {text}
  </NavLink>
);
