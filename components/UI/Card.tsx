import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="hstack p-2 h-100">{children}</div>;
};

export default Card;
