import React, {useState} from 'react'
import Showcase from '../components/Showcase'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'


// const props = {
// text : 'hej',
// featuredProducts,
// topProducts
// }

// const { featuredProducts, topProducts } = props

const HomeView = ({ featuredProducts, topProducts }) => {

  window.top.document.title = 'Fixxo.'

  return (
    <>
      
      <MainMenuSection />
      <Showcase />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <FooterSection />
    </>
  )
}





export default HomeView