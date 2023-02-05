import React, { FC } from 'react';
import { VehicleVariable } from '../../types/VehicleVariable';
import { VehicleVariableLink } from '../../components/VehicleVariableLink';

interface Props {
  vehicleVariables: VehicleVariable[];
}

export const VehicleVariableListPage: FC<Props> = ({ vehicleVariables }) => (
  <>
    <div className="header-details">Vehicle Variables List</div>
    <table className="table-details table-details--stripes table-details--block">
      <tbody className="table-group-divider">
        {vehicleVariables.map(variable => (
          <tr key={variable.ID}>
            <td>{variable.ID}</td>
            <td><VehicleVariableLink id={variable.ID} name={variable.Name} /></td>
            <td>{variable.GroupName}</td>
            {/* eslint-disable-next-line react/no-danger */}
            <td dangerouslySetInnerHTML={{ __html: variable.Description }}></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
