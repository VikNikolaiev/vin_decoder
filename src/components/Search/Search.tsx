import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { getDecodeVin } from '../../api/decodeVin';
import { DecodeVin } from '../../types/decodeVin';
import './Search.scss';
import TextInput from '@avtopro/text-input/dist/index';
import Button from '@avtopro/button/dist/index';
import Select, {Option} from '@avtopro/select/dist/index';
import Modal from '@avtopro/modal/dist/index';

interface Props {
  setDecodeVin:(decodeVin: DecodeVin[]) => void;
  setIsLoading:(status: boolean) => void;
  setCurrentVinQuery:(currentVinQuery: string) => void;
}

export const Search: FC<Props> = ({ setDecodeVin, setIsLoading, setCurrentVinQuery }) => {
  const [message, setMessage] = useState('');
  const [vinQuery, setVinQuery] = useState('');
  const [wrongVinQuery, setWrongVinQuery] = useState(false);
  const [vinLastViews, setVinLastViews] = useState<string[]>([]);

  useEffect(() => {
    const loadedVinLastViews = sessionStorage.getItem('vinView');

    if (loadedVinLastViews !== null) {
      setVinLastViews(JSON.parse(loadedVinLastViews));
    }
  }, []);

  const isValidVin = (vin: string):boolean => {
    // eslint-disable-next-line max-len
    const pattern = /[A-HJ-NPR-Z0-9]{17}/;

    return pattern.test(vin);
  };

  const loadDecodeVin = useCallback(async () => {
    setIsLoading(true);

    try {
      const fullDecodeVin = await getDecodeVin(vinQuery);

      const errorVariable = fullDecodeVin.Results.find(variable => variable.VariableId === 143);

      if (errorVariable === undefined) {
        throw new Error('Wrong VIN code');
      }

      if (errorVariable.Value !== '0') {
        const errorDescriptionVariable = fullDecodeVin.Results
          .find(variable => variable.VariableId === 191);

        throw new Error(errorDescriptionVariable ? errorDescriptionVariable.Value : 'Wrong VIN code');
      }

      setMessage(fullDecodeVin.Message);

      setDecodeVin((fullDecodeVin.Results)
        .filter(variable => variable.Value && variable.Value !== '0')
        .sort((a, b) => a.VariableId - b.VariableId));
    } catch (error) {
      setWrongVinQuery(true);
      setMessage(String(error));
      setDecodeVin([]);
    }

    setIsLoading(false);
  }, [vinQuery]);

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDecodeVin([]);

    if (!isValidVin(vinQuery)) {
      setWrongVinQuery(true);
      setMessage('Wrong input! Check your VIN code.');

      return;
    }

    setVinLastViews(current => {
      const currentVinLastViews = [...current];

      if (currentVinLastViews.includes(vinQuery)) {
        currentVinLastViews.splice(currentVinLastViews.indexOf(vinQuery), 1);
        currentVinLastViews.unshift(vinQuery);
        sessionStorage.setItem('vinView', JSON.stringify(currentVinLastViews));

        return currentVinLastViews;
      }

      if (currentVinLastViews.length >= 5) {
        currentVinLastViews.pop();
      }

      currentVinLastViews.unshift(vinQuery);
      sessionStorage.setItem('vinView', JSON.stringify(currentVinLastViews));

      return currentVinLastViews;
    });

    loadDecodeVin().then();

    setCurrentVinQuery(vinQuery);
    setVinQuery('');
  };

  return (
    <section className="search">
      <div className="search__box">
        <form
          className="search__form"
          onSubmit={handleSubmit}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="search__input" className="search__label">
            Decode Your Vehicle Identification Number
          </label>
          <div className="search__field">
            <TextInput 
              placeholder="Enter VIN code ..."
              blockSize='' 
              value={vinQuery}
              onChange={(changeEvent: React.ChangeEvent<HTMLInputElement>) => {
                setWrongVinQuery(false);
                setVinQuery(changeEvent.target.value);
              }}
            />

            <Button
              type="submit"
              theme="blue"
              uppercase
            >
              Find
            </Button>
          </div>

          {/* <div className="search__field">            
            <input
              type="text"
              id="search__input"
              className="search__input"
              placeholder="Enter VIN code ..."
              value={vinQuery}
              onChange={(changeEvent) => {
                setWrongVinQuery(false);
                setVinQuery(changeEvent.target.value);
              }}
            />
            <button
              type="submit"
              data-cy="submit-button"
              className="search__submit"
            >
              Find
            </button>
          </div> */}

          <div className="search__error">
            {wrongVinQuery && (
              <Modal
                mode="error"
                closeOnClick
                theme="danger"
                onClose={() => {
                  setWrongVinQuery(false);
                }}
              >
                {message}
              </Modal>
              
              
              // <div className="search__error__message">{message}</div>
            )}
          </div>

          

          {vinLastViews.length > 0 && (
            <div className="search__history">
              <Select
                  name=""
                  placeholder='Last views:'
                  onChange={(_name: any, value: React.SetStateAction<string>[]) => {
                    setVinQuery(value[0]);
                    
                    // setDecodeVin([]);
                    // loadDecodeVin().then();
                    // setCurrentVinQuery(vinQuery);
                    // setVinQuery('');


                    setWrongVinQuery(false);
                  }}
              >
                  {vinLastViews.map(vinCode => (
                      <Option key={vinCode} value={vinCode}>
                          {vinCode}
                      </Option>
                  ))}
              </Select>

              {/* {'Last views: '}
              {vinLastViews.map(vinCode => (
                <span
                  key={vinCode}
                  className="search__history-item"
                  role="presentation"
                  onClick={() => {
                    setVinQuery(vinCode);
                    setWrongVinQuery(false);
                  }}
                >
                  {`${vinCode}`}
                </span>
              ))} */}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
