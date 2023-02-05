import { client } from '../utils/fetchClient';
import { DecodeVinAnswear } from '../types/decodeVin';

export const getDecodeVin = (vin: string) => {
  // eslint-disable-next-line no-console
  console.log(`/vehicles/decodevin/${vin}?format=json`);

  return client.get<DecodeVinAnswear>(`/vehicles/decodevin/${vin}?format=json`);
};
