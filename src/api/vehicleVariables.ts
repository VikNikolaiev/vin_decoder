import { client } from '../utils/fetchClient';
import { VehicleVariableAnswear } from '../types/VehicleVariable';

export const getVehicleVariables = () => {
  return client.get<VehicleVariableAnswear>('/vehicles/getvehiclevariablelist?format=json');
};
