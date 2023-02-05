import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { VehicleVariable } from '../../types/VehicleVariable';

interface Props {
  vehicleVariables: VehicleVariable[];
}
export const VehicleVariablePage:FC<Props> = ({ vehicleVariables }) => {
  const { idParam } = useParams();
  const currentVehicleVariable:VehicleVariable | undefined = vehicleVariables
    .find(variable => variable.ID === Number(idParam));

  return (
    <>
      {currentVehicleVariable && (
        <div>
          <div className="header-details">{currentVehicleVariable.Name}</div>
          <table className="table-details table-details--block">
            <tbody>
              <tr>
                <td>Group name</td>
                <td>{currentVehicleVariable.GroupName}</td>
              </tr>
              <tr>
                <td>Descriprion</td>
                {/* eslint-disable-next-line react/no-danger */}
                <td dangerouslySetInnerHTML={{ __html: currentVehicleVariable.Description }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {currentVehicleVariable === undefined && (
        <div>
          <div>NO ITEMS</div>
        </div>
      )}
    </>
  );
};
