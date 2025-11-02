import styled from 'styled-components';
import ProductCard from './ProductCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap}
`;
export default function ProductGrid({ data }) {
  return (
    <Grid columns={data.columns} gap={data.gap}>
      {data.products.map(product => <ProductCard key={product.id} product={product} />)}
    </Grid>
  )
}