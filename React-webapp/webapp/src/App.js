import { useState } from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';
import Showcase from './components/Showcase';

function App() {
  const [featuredProducts, setFeaturedProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$55.00", rating: 5, img: "https://images.pexels.com/photos/10452902/pexels-photo-10452902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Blue Boxers", category: "Fashion", price: "$15.00", rating: 5, img: "https://media.istockphoto.com/id/172960652/photo/white-boxer-shorts-clipped-to-clothesline-against-blue-sky.jpg?s=612x612&w=0&k=20&c=XafOSHDQkdViv3DT7tesqIl08fNoBO-SD2J9dln87z8="},
    { id: 3, name: "Modern Yellow T-Shirt", category: "Fashion", price: "$25.00", rating: 5, img: "https://i.guim.co.uk/img/media/f728015775573519761420b152cfadf2b09dabfb/165_53_3556_2133/3556.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=94425481de589ac6c5fa0236854c49c1"},
    { id: 4, name: "Modern Green Jeans", category: "Fashion", price: "$135.00", rating: 5, img: "https://www.dhresource.com/0x0/f2/albu/g15/M01/62/30/rBVa3l-x1u6AZR6OAAZTgatyN3I989.jpg"}
  ])

  const [topProducts, setToProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."}
    ])



  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomeView featuredProducts={featuredProducts} topProducts={topProducts} />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView featuredProducts={featuredProducts} />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />

        <Route path="/showcase" element={<Showcase />} />
        
        <Route path="*" element={<NotFoundView />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
