import React, { ReactNode } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

interface PropsType {
  children: ReactNode;
}

const FilterCard: React.FC<PropsType> = (props:PropsType) => {
  return (
    <div className="form-group mt-4 border border-dark-subtle rounded-2 p-2">
      {props.children}
    </div>
  );
};

export default FilterCard;
