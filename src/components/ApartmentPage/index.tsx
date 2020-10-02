import React from 'react';
import { formatPrice } from '../../helpers/formatPrice';
import { TApartmentList } from '../../types';
import { TMode } from '../ApartmentList';
import './index.css';

type ApartmentPageProps = {
  data: TApartmentList | null;
  setMode: React.Dispatch<React.SetStateAction<TMode>>;
};

const ApartmentPage = ({ data, setMode }: ApartmentPageProps) => {
  const handlerBackButton = () => {
    setMode('list');
  };

  return (
    <div>
      <header
        className="apartment-page__header"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(50, 20, 1, 0.5) 0%, rgba(50, 20, 1, 0.7) 100%), url(${data?.poster_link}.png)`,
        }}
      >
        <div className="apartment-page__price">
          {formatPrice(data!.price, 22, 'white')}
        </div>

        <h1 className="apartment-page__title">{data?.title}</h1>
        <p className="apartment-page__description">{data?.description}</p>
      </header>

      <button className="apartment-page__back" onClick={handlerBackButton}>
        Вернуться к списку
      </button>
    </div>
  );
};

export default ApartmentPage;
