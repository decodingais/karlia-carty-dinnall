import React from "react"
import Layout from "../components/layout"

import { message } from "../components/contact.module.css"

const Contact = () => {
    return (
        <Layout>
            <div className="container-fluid py-4">
                <div className="row bg-dark text-white-50">
                    <h4>Contact</h4>
                </div>
                <div className="container">
                    <div className="row py-4">
                        <form className="row g-3">
                            <div className="col-md-4">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter first name here" required/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter last name here" required/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="message">Message</label>
                                <textarea className={"form-control " + message} placeholder="Enter message here" id="message" required></textarea>                                
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact