import React from 'react';
import { Rouble } from '../common/SVGIcon';

export const formatPrice = (price: number, width: number, color?: string) => {
  return (
    <>
      {price} <Rouble width={width} fill={color} />
    </>
  );
};
