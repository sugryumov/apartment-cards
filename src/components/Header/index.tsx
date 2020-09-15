import React, { useContext, useEffect, useState } from 'react';
import { TApartmentList } from '../../types';
import { StoreContext } from '../App';
import ContainerLayout from '../../common/ContainerLayout';
import './index.css';

const Header = () => {
  const { apartmentList } = useContext(StoreContext);
  const [favoritesCount, setFavoritesCount] = useState<number>(0);

  useEffect(() => {
    const filterFavorites = apartmentList?.filter(
      (item: TApartmentList) => item.like,
    ).length;

    if (apartmentList) {
      setFavoritesCount(filterFavorites);
    }
  }, [apartmentList]);

  return (
    <ContainerLayout>
      <header className="header">
        <h1 className="header__title">Apartments</h1>
        <p className="header__favorites">Избранное: {favoritesCount}</p>
      </header>
    </ContainerLayout>
  );
};

export default Header;
