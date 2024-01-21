import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { title, profile, credit } from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <section className="py-0 text-center container">
      <div className="row py-5">
        <div className="col-lg-2 col-md-2 mx-auto">
            <StaticImage className={profile} alt="Karlia Carty-Dinnall Profile Photo" src="../images/karlia-carty-dinnall.png" width={200} />       
        </div>
        <div className="col-lg-10 col-md-10 py-4">
          <h1 className={title}>KARLIA CARTY-DINNALL</h1>
          <h2>ATTORNEY-AT-LAW & MEDIATOR</h2>        
        </div>
      </div> 

      <div className="row bg-dark text-white-50">
        <h4>Practice Areas</h4>
      </div>
      <div className="row py-5">
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Family</div>
            <StaticImage src="../images/family.jpg" class="card-img-top" alt="Image of family"/>
            <p className={credit}>Photo Credit: <a href="https://unsplash.com/photos/a-man-and-two-women-holding-a-child-on-their-shoulders-4ardiyvfhTM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Osarugue Igbinoba</a></p>
            <div className="card-body">
            <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Divorce</li>
                <li className="list-group-item">Custody & Maintenance</li>
                <li className="list-group-item">Marital Property Disputes</li>
                <li className="list-group-item">Family Law Litigation</li>
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">General Legal Services</div>
            <StaticImage src="../images/legal-services.jpg" class="card-img-top" alt="Image of lady justice"/>
            <p className={credit}>Photo Credit: <a href="https://unsplash.com/photos/woman-in-gold-dress-holding-sword-figurine-L4YGuSg0fxs?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Tingey Injury Law Firm</a></p>
            <div className="card-body">
              <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Contracts, Agreements & Deeds</li>
                <li className="list-group-item">Company & Business Registration</li>
                <li className="list-group-item">Demand Letters & Notices</li>
                <li className="list-group-item">Other General Legal Services</li>
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div> 
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Civil & Commercial Litigation</div>
            <StaticImage src="../images/litigation.jpg" class="card-img-top" alt="Image of court room"/>
            <p className={credit}>Photo Credit: <a href="https://unsplash.com/photos/brown-wooden-chairs-inside-room-1YeQl23dvJI?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Kelly Sikkema</a></p>
            <div className="card-body">
              <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Debt Claims</li>
                <li className="list-group-item">Property Disputes</li>
                <li className="list-group-item">Personal Injury</li>
                <li className="list-group-item">Breach of Contract</li>                
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Real Estate</div>
            <StaticImage src="../images/real-estate.jpg" class="card-img-top" alt="Image of home"/>
            <p className={credit}>Photo Credit: <a href="https://unsplash.com/photos/white-concrete-residential-building-near-trees-CLKGGwIBTaY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash">Bernard Hermant</a></p>
            <div className="card-body">
              <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Property Transactions</li>
                <li className="list-group-item">Sale & Lease Agreements</li>
                <li className="list-group-item">Land & Property Disputes</li>
                <li className="list-group-item">Landlord & Tenant Disputes</li>
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div>
        </div>
      </div>  
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)