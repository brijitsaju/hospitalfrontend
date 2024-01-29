import React from 'react'
import './footer.css'
import { Col, Row } from 'react-bootstrap'
function Footer() {
  return (
    <div>
         <section className='footer' style={{marginTop:"20px",padding:"20px"}} >
                
                <Row className='foot d-flex justify-content-evenly ' style={{textDecoration:"none",paddingLeft:"150px"}}>
                    <Col md={4} sm={12} className=' d-flex flex-column' >
                        <h5>Hospital Links</h5>
                        <a  href="">Home</a>
                        <a  href="">About Us</a>
                        <a href="">Management Team</a>
                        <a href="">Academics</a>
                        <a href="">Advisory Board</a>
                        <a href="">CMI Legacy</a>
                        <a href="">Groups of Institutions</a>
                        <a href="">News & Events</a>
                        <a href="">Careers</a>
                        <a href="">Research</a>
                        <a href="">Accreditions</a>
                        
                       

                    </Col>
                    <Col md={4} sm={12} className='d-flex flex-column'>
                        <h5>Informaton links</h5>
                        <a href="">Medical Team</a>
                        <a href="">International Patients</a>
                        <a href="">Health Check Packages</a>
                        <a href="">Packages</a>
                        <a href="">Quality</a>
                        <a href="">Patient Care</a>
                        <a href="">Medical Team</a>
                        <a href="">International Patients</a>
                        <a href="">Health Check Packages</a>
                        <a href="">Packages</a>
                        <a href="">Quality</a>
                      

                      

                    </Col>
                    
                    <Col md={4} sm={12} className='d-flex flex-column'>
                        
                    <h5>Extra links</h5>
                        <a href=""> Online Appointment</a>
                        <a href="">Find a Doctor</a>
                        <a href="">Telemedicine Services</a>
                        <a href="">Gallery</a>
                        <a href="">Press Releases</a>
                        <a href="">Blog</a>
                        <a href="">Compliance</a>
                        <a href="">Report</a>
                        <a href="">Feedback</a>

                    </Col>


                </Row>
                <div style={{marginLeft:"35px",marginTop:"20px"}}>Health care and Educational Trust </div>
                <hr />
                <div style={{marginLeft:"30px",paddingBottom:"20px"}}>Copyright © 2023 Inc. All rights reserved.      Privacy Policy |  Terms of Use  |  Refunds  |</div>
            </section>
      
    </div>
  )
}

export default Footer
