import React, { useContext, useEffect, useState } from 'react';
import { getApartmentList } from '../../services';
import { TApartmentList } from '../../types';
import { StoreContext } from '../App';
import ContainerLayout from '../../common/ContainerLayout';
import Spinner from '../../common/Spinner';
import Error from '../../common/Error';
import ApartmentItem from './ApartmentItem';
import ApartmentPage from '../ApartmentPage';
import './index.css';

export type TMode = 'list' | 'page';

const ApartmentList = () => {
  const { apartmentList, setApartmentList } = useContext(StoreContext);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [mode, setMode] = useState<TMode>('list');
  const [apartmentPage, setApartmentPage] = useState<TApartmentList | null>(
    null,
  );

  useEffect(() => {
    getApartmentList()
      .then(({ data }) => {
        setLoading(false);
        setApartmentList(data);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
        setErrorMessage(err.message);
      });
  }, [setApartmentList]);

  const likeHandler = (id: number) => {
    const findApartment = apartmentList?.reduce(
      (acc: TApartmentList[], apartment: TApartmentList) => {
        if (apartment.id === id) {
          return [
            ...acc,
            {
              ...apartment,
              like: !apartment.like,
            },
          ];
        }

        return [...acc, apartment];
      },
      [],
    );

    setApartmentList(findApartment);
  };

  const showApartmentPage = (apartment: TApartmentList) => {
    setMode('page');
    setApartmentPage(apartment);
  };

  const renderApartmentList = () => {
    return apartmentList?.map((apartment: TApartmentList) => {
      return (
        <div
          className="apartment-list__wrap-item"
          onClick={() => showApartmentPage(apartment)}
          key={apartment.id}
        >
          <ApartmentItem data={apartment} likeHandler={likeHandler} />
        </div>
      );
    });
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error message={errorMessage} />;
  }

  return (
    <ContainerLayout>
      {mode === 'list' && (
        <div className="apartment-list">{renderApartmentList()}</div>
      )}

      {mode === 'page' && (
        <ApartmentPage data={apartmentPage} setMode={setMode} />
      )}
    </ContainerLayout>
  );
};

export default ApartmentList;
