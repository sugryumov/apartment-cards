import React from 'react';
import { HeartIcon } from '../../../common/SVGIcon';
import { formatPrice } from '../../../helpers/formatPrice';
import { TApartmentList } from '../../../types';
import './index.css';

type ApartmentItem = {
  data: TApartmentList;
  likeHandler: (id: number) => void;
};

const ApartmentItem = ({ data, likeHandler }: ApartmentItem) => {
  const { id, poster_link, title, like, description, price } = data;

  const onClickLikeHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    event.stopPropagation();
    likeHandler(id);
  };

  return (
    <div key={id} className="apartment-list__item">
      <img className="apartment-list__img" src={poster_link} alt={title} />

      <button
        className="apartment-list__like"
        onClick={e => onClickLikeHandler(e, id)}
      >
        {like ? <HeartIcon fill="crimson" /> : <HeartIcon fill="transparent" />}
      </button>

      <div className="apartment-list__meta">
        <p className="apartment-list__title">{title}</p>
        <p className="apartment-list__description">{description}</p>

        <p className="apartment-list__price">
          {formatPrice(price, 14)} за ночь
        </p>
      </div>
    </div>
  );
};

export default ApartmentItem;
