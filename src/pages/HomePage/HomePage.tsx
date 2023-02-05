import React, { FC, useState } from 'react';
import { DecodeVin } from '../../types/decodeVin';
import { Loader } from '../../components/Loader';
import { DecodeVinDetails } from '../../components/DecodeVinDetails';
import { Search } from '../../components/Search';

export const HomePage: FC = () => {
  const [decodeVin, setDecodeVin] = useState<DecodeVin[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentVinQuery, setCurrentVinQuery] = useState('');

  return (
    <>
      <Search
        setDecodeVin={setDecodeVin}
        setIsLoading={setIsLoading}
        setCurrentVinQuery={setCurrentVinQuery}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!decodeVin.length || (
            <DecodeVinDetails
              decodeVin={decodeVin}
              currentVinQuery={currentVinQuery}
            />
          )}
        </>
      )}
    </>
  );
};
