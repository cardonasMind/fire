import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import ProductCard from '../components/ProductCard'




const ProductsView = ({featuredProducts = []}) => {
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products"/>
      <ProductGridSection title="Top Products" products={featuredProducts} />
      <FooterSection />
    </>
  )
}

export default ProductsView




