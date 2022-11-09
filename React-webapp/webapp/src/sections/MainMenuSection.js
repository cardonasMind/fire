import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {

  const [showMenu, setshowMenu] = useState(false)

  return (
    <nav className="mainmenu container">
      <NavLink className="logo" to="/" end>Fixxo.</NavLink>
      <div className={`menu-links ${ showMenu ? "d-grid": ""}`}>
          <NavLink className="menu-link" to="/" end>Home</NavLink>
          <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
          <NavLink className="menu-link" to="/products" >Products</NavLink>
          <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
      </div>
      <div className="menu-icons"> 
          <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
          <MenuIcon link="/compare" icon="fa-regular fa-code-compare" />
          <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
          <MenuIcon quantity="4" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
      </div>
    </nav>
  )
}

export default MainMenuSection