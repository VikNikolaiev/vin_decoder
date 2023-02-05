import React, { FC } from 'react';
import { VehicleVariableLink } from '../VehicleVariableLink/VehicleVariableLink';
import { DecodeVin } from '../../types/decodeVin';
import './DecodeVinDetails.scss';

interface Props {
  decodeVin: DecodeVin[];
  currentVinQuery: string;
}
export const DecodeVinDetails: FC<Props> = ({ decodeVin, currentVinQuery }) => {
  const getVariableValueById = (id: number) => {
    const currentVariable = decodeVin.find(variable => variable.VariableId === id);

    return currentVariable ? currentVariable.Value : '';
  };

  const today = new Date();

  return (
    <>
      <div className="header-details">
        <span className="header-details__value">
          {
            `${getVariableValueById(29)} `
            + `${getVariableValueById(26)} `
            + `${getVariableValueById(28)}`
          }
        </span>
      </div>

      <table className="table-details table-details--block">
        <tbody>
          <tr>
            <td>
              VIN
              <br />
              {currentVinQuery}
            </td>
            <td>
              Make
              <br />
              <span className="table-details__value">{getVariableValueById(26)}</span>
            </td>
            <td>
              Model
              <br />
              <span className="table-details__value">{getVariableValueById(28)}</span>
            </td>
            <td>
              Year
              <br />
              <span className="table-details__value">{getVariableValueById(29)}</span>
            </td>
            <td>
              Drive Type
              <br />
              <span className="table-details__value">{getVariableValueById(15)}</span>
            </td>
          </tr>
          <tr>
            <td>
              Style/Body
              <br />
              <span className="table-details__value">{getVariableValueById(96)}</span>
            </td>
            <td>
              Engine
              <br />
              <span className="table-details__value">{getVariableValueById(13)}</span>
            </td>
            <td colSpan={2}>
              Manufactured in
              <br />
              <span className="table-details__value">
                {`${getVariableValueById(31)}, ${getVariableValueById(77)}, ${getVariableValueById(75)}`}
              </span>
            </td>
            <td>
              Age
              <br />
              <span className="table-details__value">
                {` ${today.getFullYear() - Number(getVariableValueById(29))} years `}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="header-details">Full Vehicle Info</div>

      <table className="table-details table-details--stripes">
        <tbody>
          {decodeVin.map(variable => (
            <tr key={variable.VariableId} className="td__num">
              <td><VehicleVariableLink id={variable.VariableId} name={variable.Variable} /></td>
              <td>{variable.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
