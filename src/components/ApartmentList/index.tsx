import React, { useContext, useEffect, useState } from 'react';
import { getApartmentList } from '../../services';
import { TApartmentList } from '../../types';
import { StoreContext } from '../App';
import ContainerLayout from '../../common/ContainerLayout';
import Spinner from '../../common/Spinner';
import Error from '../../common/Error';
import ApartmentItem from './ApartmentItem';
import './index.css';

const ApartmentList = () => {
  const { apartmentList, setApartmentList } = useContext(StoreContext);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

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

  const renderApartmentList = () => {
    return apartmentList?.map((apartment: any) => {
      return (
        <ApartmentItem
          key={apartment.id}
          data={apartment}
          likeHandler={likeHandler}
        />
      );
    });
  };

  return (
    <ContainerLayout>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error message={errorMessage} />
      ) : (
        <div className="apartment-list">{renderApartmentList()}</div>
      )}
    </ContainerLayout>
  );
};

export default ApartmentList;
