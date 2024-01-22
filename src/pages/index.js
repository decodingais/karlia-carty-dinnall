import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import { title, profile } from "../components/index.module.css"


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
          <h4 id="practice">Specializations</h4>
      </div>
      <div className="row py-4">
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Divorce</div>
            <StaticImage src="../images/family.jpg" class="card-img-top" alt="Image of family"/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Property Sales & Purchases</div>
            <StaticImage src="../images/real_estate_legal.jpg" class="card-img-top" alt="Image of family"/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Probate & Administration of Estate</div>
            <StaticImage src="../images/probate.jpg" class="card-img-top" alt="Image of family"/>
          </div>
        </div>
      </div>
      <div className="row bg-dark text-white-50">
          <h4 id="practice">Practice Areas</h4>
      </div>
      <div className="row py-4">
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Probate &amp; Estate Administration</div>
            <StaticImage src="../images/litigation.jpg" class="card-img-top" alt="Image of court room"/>
            <div className="card-body">
              <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Citations</li> 
                <li className="list-group-item">Drafting of Wills</li>
                <li className="list-group-item">Grant of Probate</li>
                <li className="list-group-item">Letters of Administration</li>                               
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Family</div>
            <StaticImage src="../images/family.jpg" class="card-img-top" alt="Image of family"/>
            <div className="card-body">
            <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Divorce</li>
                <li className="list-group-item">Custody</li>                
                <li className="list-group-item">Division</li>
                <li className="list-group-item">Property Rights</li>
                <li className="list-group-item">Child Maintenance</li>
                <li className="list-group-item">Spousal Maintenance</li> 
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Civil &amp; Commercial Litigation</div>
            <StaticImage src="../images/legal-services.jpg" class="card-img-top" alt="Image of lady justice"/>
            <div className="card-body">
              <ul className="list-group list-group-flush py-2">
                <li className="list-group-item">Injunctions</li>
                <li className="list-group-item">Labour &amp; Employment</li>
                <li className="list-group-item">Landlord &amp; Tenant</li>
                <li className="list-group-item">Construction</li>
                <li className="list-group-item">Personal Injury</li>                
                <li className="list-group-item">Power of Attorney Deeds</li>
                <li className="list-group-item">Partnership Agreements</li>
                <li className="list-group-item">Drafting of Contracts and Deeds</li>
              </ul>
              <Link to="/contact"><button className="btn btn-dark text-white-50" type="submit">Book Consultation</button></Link>
            </div>
          </div> 
        </div>
        <div className="col-lg-3 col-md-4 mx-auto">
          <div className="card">
            <div className="card-header bg-warning fw-bold">Real Estate &amp; Conveyancing</div>
            <StaticImage src="../images/real-estate.jpg" class="card-img-top" alt="Image of home"/>
            <div className="card-body">
              <ul className="list-group list-group-flush py-2">
              <li className="list-group-item">Caveats</li>
                <li className="list-group-item">Transmission</li>
                <li className="list-group-item">Adverse Possession</li>                
                <li className="list-group-item">Registration of Title</li>
                <li className="list-group-item">Property Development</li>
                <li className="list-group-item">Restrictive Covenants and Modifications</li>
                <li className="list-group-item">Land Title Matters including Lost Title Applications</li>     
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