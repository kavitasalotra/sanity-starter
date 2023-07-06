import React from 'react';
import Title from '../atoms/Title';
import Description from '../atoms/Description';

function ComponentHeader({ title, description, textBrand}) {
  return (
    <div className="space-y-4 ">
      <Title>{title}</Title>
      <Description textBrand={textBrand}>{description}</Description>
    </div>
  );
}

export default ComponentHeader;
