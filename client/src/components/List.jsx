import React from 'react';
import styled from 'styled-components';
import BannerType from './BannerType.jsx';

const Banners = styled.ul`
  display: flex;
  flex-direction: column;
`;

const List = ({types, currency, spendEssence, pokedex}) => (
  <Banners>
    { types.map((type, index) => (
      <BannerType key={index} type={type.name} list={type.pokemon} currency={currency} spendEssence={spendEssence} pokedex={pokedex} />
    ))}
  </Banners>
);

export default List;