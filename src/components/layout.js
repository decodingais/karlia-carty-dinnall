import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="container-fluid p-0">
      <Navbar/>
      <main>
        {children}
      </main>
      <footer className="bg-dark-subtle">
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-lg-3 col-md-4 mx-auto">
              <div><h6>Opening Hours</h6></div>
              <div className="row">
                <div className="col-lg-6 col-md-4 mx-auto">Monday - Thursday</div>
                <div className="col">9:00 a.m. - 5:00 p.m.</div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-4 mx-auto">Friday</div>
                <div className="col">9:00 a.m. - 4:30 p.m.</div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-4 mx-auto">Saturday & Sunday</div>
                <div className="col">Closed</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mx-auto">
               <div><h6>Contact</h6></div>
               <div className="py-1"><StaticImage src="../images/envelope-at-fill.svg" alt="Send email to kcdlawfirm@gmail.com" width={20}/> kcdlawfirm@gmail.com</div>
               <div className="py-1"><StaticImage src="../images/envelope-at-fill.svg" alt="Send email to karliacartydinnall@gmail.com" width={20}/> karliacartydinnall@gmail.com</div>
               <div className="py-1"><StaticImage src="../images/telephone-inbound-fill.svg" alt="Send email to kcdlawfirm@gmail.com" width={20}/> +1-876-546-7382</div>
            </div>
            <div className="col-lg-3 col-md-4 mx-auto">
              <div>Copyright &copy; {new Date().getFullYear()}. All rights reserved</div>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout