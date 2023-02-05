import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { VehicleVariableListPage } from '../../pages/VehicleVariableListPage';
import { VehicleVariablePage } from '../../pages/VehicleVariablePage';
import { getVehicleVariables } from '../../api/vehicleVariables';
import { VehicleVariable } from '../../types/VehicleVariable';
import './Main.scss';

export const Main: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [vehicleVariables, setVehicleVariables] = useState<VehicleVariable[]>([]);

  const loadVehicleVariables = useCallback(async () => {
    try {
      const fullVehicleVariables = await getVehicleVariables();

      setVehicleVariables(fullVehicleVariables.Results);
    } catch {
      Error('Can`t load vehicle variables');
    }
  }, []);

  useEffect(() => {
    loadVehicleVariables().then();
  }, []);

  return (
    <main className="main">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="/variables">
          <Route index element={<VehicleVariableListPage vehicleVariables={vehicleVariables} />} />
          <Route path=":idParam" element={<VehicleVariablePage vehicleVariables={vehicleVariables} />} />
        </Route>
      </Routes>
    </main>
  );
};
