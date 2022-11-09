import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title , products}) => {



  return (
    <section className="product-grid">
      <div className="container">
        <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {
                products.map(product => <ProductCard key={product.id} product={product} />)
              }

            </div> 
      </div>
    </section>
  )
}

export default ProductGridSection