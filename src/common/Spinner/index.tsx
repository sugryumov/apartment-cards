import React from 'react';
import { Spinner as SVGSpin } from '../SVGIcon';
import './index.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <SVGSpin />
    </div>
  );
};

export default Spinner;
