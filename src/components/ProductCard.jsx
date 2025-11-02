import React from 'react'
import styled from 'styled-components';
import { formatPrice } from '../../utils/formatters';

const Card = styled.div`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.20);
  }
  transition: all 0.3s ease;
`
const CardContent = styled.div`
  padding: 12px;
`
const ImageContainer = styled.div`
  position: relative;
`
const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 8px 8px 0px 0px;
`
const OfferBadge = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: white;
  background-color: red;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: small;
  font-weight: bold;
  margin-top: -16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.10);
`
const ProductName = styled.p`
  font-weight: bold;
  font-size: larger;
`
const PriceContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
  gap: 4px;
`
const OriginalPrice = styled.p`
  text-decoration: line-through;
  font-style: italic;
  color: gray;
`
const DiscountedPrice = styled.p`
  font-size: larger;
  font-weight: bold;
  color: green;
`
const Label = styled.p`
  background-color: red;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: medium;
  display: inline-block;
`


export default function ProductCard({ product }) {
  const { name, price, discountedPrice, imgUrl, label, offer } = product;
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={imgUrl} alt={name} />
        <OfferBadge>{offer}</OfferBadge>
      </ImageContainer>
      <CardContent>
        <ProductName>{name}</ProductName>
        <PriceContainer>
          <OriginalPrice>{formatPrice(price)}</OriginalPrice>
          <DiscountedPrice>{formatPrice(discountedPrice)}</DiscountedPrice>
        </PriceContainer>
        {label && <Label>{label}</Label>}
      </CardContent>
    </Card>
  )
}
