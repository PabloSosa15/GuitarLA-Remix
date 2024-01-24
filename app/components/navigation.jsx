import { Link, useLocation } from "@remix-run/react"
import image from "../../public/img/carrito.png"

export default function Navigation() {

    const location = useLocation()
  return (
    <nav className="navigation">
    <Link to="/"
    className={location.pathname === "/index" ? 'active' : ''}
    >Home</Link>
    <Link to="/us"
    className={location.pathname === "/us" ? 'active' : ''}
    >About Us</Link>
    <Link to="/guitars"
    className={location.pathname === "/guitars" ? 'active' : ''}
    >Store</Link>
    <Link to="/blog"
    className={location.pathname === "/blog" ? 'active' : ''}
      >Blog</Link>

      <Link to="/cart"

      ><img src={image} alt="cart item" ></img></Link>

  </nav>
  )
}
