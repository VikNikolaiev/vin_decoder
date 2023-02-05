import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  id: number;
  name: string
}
export const VehicleVariableLink:FC<Props> = ({ id, name }) => (
  <NavLink
    to={`/variables/${id}`}
  >
    {name}
  </NavLink>
);
