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
                        <div><span><b>Karlia Carty-Dinnall</b></span> is committed to helping all clients achieve their goals, by ensuring
                        she is consistently client focused &amp; results driven, ensuring that her commitment to
                        providing quality legal services are at the highest standard.
                        </div>     

                        <div className="py-4">
                            <h6>Education:</h6>
                            <ul>
                                <li>Norman Manley Law School: Legal Education Certificate (LEC)</li>
                                <li>University of West Indies, Mona Jamaica: Bacheor of Laws (LLB), Second-Class Honours</li>
                                <li>University of Technology, Jamaica: Bsc. In Business Administration, Second-Class Honours</li>
                            </ul>
                        </div>
                    </div>
                </div>                
            </div>
        </Layout>
    )
}

export default About