import React, { createContext, useState } from 'react';
import { TApartmentList } from '../../types';
import ApartmentList from '../ApartmentList';
import Header from '../Header';

export const StoreContext = createContext<any>({});

const App = () => {
  const [apartmentList, setApartmentList] = useState<TApartmentList[] | null>(
    null,
  );

  const initialState = {
    apartmentList,
    setApartmentList,
  };

  return (
    <StoreContext.Provider value={initialState}>
      <Header />
      <ApartmentList />
    </StoreContext.Provider>
  );
};

export default App;
