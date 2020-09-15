import React, { ReactNode } from 'react';
import './index.css';

type ContainerLayoutProps = {
  children: ReactNode;
};

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return <div className="container-layout">{children}</div>;
};

export default ContainerLayout;
