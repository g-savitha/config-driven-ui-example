import React from 'react'
import Banner from './Banner';
import ProductGrid from './ProductGrid';
import Title from './Title';
import styled from 'styled-components';

const Section = styled.div`
  padding: 0 60px;
  margin-bottom: 20px;
`

const componentMap = {
  'banner': Banner,
  'product-grid': ProductGrid,
  'title': Title
}

export default function LayoutRenderer({ config }) {
  return config.sections.map(section => {
    const ComponentToRender = componentMap[section.type]
    return ComponentToRender ?
      (<Section key={section.id}>
        <ComponentToRender data={section.data} />
      </Section>
      ) : null;
  })

}
