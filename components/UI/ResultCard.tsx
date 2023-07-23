
import React, { ReactNode } from 'react';


interface PropsType {
  children: ReactNode;
}
const ResultCard: React.FC<PropsType> = (props:PropsType) => {
  return <div className="fs-2">{props.children}</div>;
};

export default ResultCard;
