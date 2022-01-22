import React from 'react'
import { Link } from "react-router-dom";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";



const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};


function Header() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <Link className="navbar-brand" to="/">Shopping</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/products">Product</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/contact">Contact</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/about">About</Link>
//       </li>
//       <li className="nav-item">
//       <button type="button" className="btn btn-primary">Cart</button>
//       </li>
//       <li className="nav-item">
//      <Link to ="/login"><button type="button" className="btn btn-secondary">Login</button></Link>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
//     </div>
//   )

return <ReactNavbar {...options} />;

}

export default Header
