import React from "react"
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout>
            <div className="container-fluid py-4">                
                <div className="container">
                    <div className="row bg-dark text-white-50">
                        <h4>About</h4>
                    </div>
                    <div className="row py-4">
                        <h5>Professional Experience</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Associate Attorney-At-Law</div>
                                    Nicholson Phillips, Attorneys-at-Law
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Associate Attorney-At-Law</div>
                                    Victoria W Brown & Associates
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>                           
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Judicial Clerkship</div>
                                    Court of Appeal and St Catherine Parish Court (Spanish Town, Old Harbour, Linstead and Portmore)
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li> 
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Intern/ Legal Assistant </div>
                                    Victoria W Brown & Associates
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>                           
                        </ul>
                    </div>
                    <div className="row py-4">
                        <h5>Associations</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">The Jamaica Bar Association</div>
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Continuing Legal Professional Development (CLPD) Committee</div>
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>                           
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Moderator at Annual November Conference 2021 on Labour Laws & Mandatory Vaccines, with presenters- Mr. Emile Leiba and Mrs. Carla-Anne Harris-Roper</div>
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>                  
                        </ul>
                    </div>
                    <div className="row py-4">
                        <h5>Cerfitications</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Mediator</div>
                                    Dispute Resolution Foundation
                                </div> 
                                <span className="badge bg-light">&#9989;</span>
                            </li>         
                        </ul>
                    </div>
                </div>                
            </div>
        </Layout>
    )
}

export default About