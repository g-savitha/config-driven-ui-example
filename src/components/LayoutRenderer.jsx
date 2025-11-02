import React from 'react'
import Banner from './Banner';
import ProductGrid from './ProductGrid';
import Title from './Title';

const componentMap = {
  'banner': Banner,
  'product-grid': ProductGrid,
  'title': Title
}

export default function LayoutRenderer({ config }) {
  return config.sections.map(section => {
    const ComponentToRender = componentMap[section.type]
    return ComponentToRender ? <ComponentToRender key={section.id} data={section.data} /> : null;
  })

}
