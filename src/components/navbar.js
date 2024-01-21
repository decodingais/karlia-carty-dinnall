import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
            <StaticImage alt="Karlia Carty-Dinnall Logo" src="../images/logo.png" width={50} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink to="/">Home</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/about">About</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/contact">Contact</ExactNavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar