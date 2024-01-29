import React from 'react'
import med1 from '../images/med1.jpg'
import med2 from '../images/med2.jpg'
import med3 from '../images/med3.webp'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import "./aadminc.css"

function Adminc() {
    return (
        <>

           <div className='scroll'>
                <div>
                    <div style={{ position: "relative" }}>
                        <div className='col-6' style={{ position: "absolute", textAlign: "center", margin: "40px" }}>
                            <h1 style={{ marginTop: "50px", fontWeight: "bolder", color: "white" }} className='head1'>Making <br /> <span style={{ color: "black" }}>Health Care </span> Better Together</h1>
                            <p className='para1' style={{ textAlign: "justify", padding: "20px", color: "white" }} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque magnam saepe molestias, distinctio quis minus tenetur ipsam maiores veniam dolores voluptatibus reprehenderit earum aspernatur possimus, animi accusantium </p>
    
    
                            <div className='link'>
                                <Link to={'/adddoc'}> <button className='btn btn-dark'>Add doctors</button></Link>
                                <Link to={'/seeappoint'}> <button className='btn btn-dark'>See Appointment</button></Link>
                                <Link to={'/seedonars'}> <button className='btn btn-danger'>See Donars</button></Link>
    
                            </div>
    
                        </div>
                        <img className='image' width={'100%'} height={'730px'} src={med1} alt="nonpm start" />
    
                    </div>
                    <div>
                        <div className='container-fulid'>
                            <Row style={{ padding: "80px" }} >
                                <Col sm={6} md={4}>
                                    <h1>Our <br />Departments</h1>
                                    <p>To undertake specialized and holistic healthcare services of world standard and to provide them to all sections....</p>
    
                                </Col>
                                <Col sm={6} md={8}>
    
    
                                    <div  >
                                        <div className='d-flex head3 ' style={{ justifyContent: "space-evenly" }}>
                                            <h1 style={{ fontSize: "25px", color: "rosybrown" }}>General Medicine</h1>
                                            <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Oncology</h1>
                                            <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Neurology</h1>
                                        </div>
                                        <br />
                                        <hr />
                                        <br />
                                        <div className='d-flex head4' style={{ justifyContent: "space-around" }}>
                                            <h1 style={{ fontSize: "25px", color: "rosybrown" }}> Neurosurgery</h1>
                                            <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Pediatrics</h1>
                                            <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Cardiology</h1>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div style={{}}>
                        <Row>
                            <Col style={{ backgroundColor: "rosybrown", height: "550px", padding: "60px", paddingTop: "100px" }} sm={6} md={6}>
    
                                <h1 className=''>Telemedicine</h1><br /><br />
                                <p>Telemedicine is a service which can help a patient/ doctor/ hospital in a remote location to consult with a Super Specialist at Rajagiri Hospital, using ICT (Information and Communication Technology) for the purpose of Diagnosis, Treatment, Second Opinion or Follow-up.</p>
    
    
                            </Col>
                            <Col sm={6} md={6}>
                                <img style={{ width: "690px", height: "550px" }} src={med2} alt="" />
                            </Col>
                        </Row>
                    </div>
                   
                    
                    <Row>
                       
                       <Col md={12} sm={6}>
                           
                               <div className='background' style={{  textAlign: "center", marginTop: "80px" }}>
                                   <h1 className='head2 ' style={{ color: "black", fontWeight: "bolder" ,paddingTop:"60px" }}>Get Cared For By The Best</h1> <br />
                                   <p className='para2' style={{ color: "black",  fontWeight: "bolder" }} >In the short span of its existence, Rajagiri Hospital has created its niche on the map of quality healthcare delivery in South India by touching nearly 2 million lives. Having earned the trust and loyalty of patients through the compassion of its caregivers and high-precision medical technology, the institution has emerged as the leading quaternary care facility in the region.</p>
                                   <Link to={'/adddoc'}><Button style={{ backgroundColor: "white", color: "black", fontSize: "30px" }} className='btn btn-outline rounded'>Add Doctor</Button></Link>
                               </div>
                              </Col>
                        </Row>
    
    
    
    
                </div>
    
                <div style={{ position: "relative",marginTop:"-120px"}}>
                    <div style={{ position: "absolute" }}>
                        <h1 className='bloodbutton' style={{ fontWeight: "bolder", color: "white", paddingTop: "90px", textAlign: "center" }}>Give the gift of life Donate Blood</h1>
                        {/* <Link to={''}> <button style={{ color: "red", fontSize: "30px", marginLeft: "590px", marginTop: "80px",borderRadius:"10px",fontWeight:"bolder",backgroundColor:"white" }}>See Donors <i class="fa-solid fa-arrow-right fa-beat"></i></button></Link> */}
                    </div><img style={{ width: "100%", height: "600px ", opacity: "" }} src="https://wallpaperaccess.com/full/2726148.jpg" alt="" />
    
    
                </div>
                <br />
    
                <div className='container'>
                    <Row>
                        <Col md={6} sm={12}>
                            <h1>Why should I donate blood?</h1>
                            <img style={{ width: "60%", marginLeft: "110px", height: "80%" }} src="https://blood-donor.in/wp-content/uploads/2020/12/pngkey.com-donation-png-1753871-1638x2048.png" alt="" />
                        </Col>
                        <Col md={6} sm={12}>
                            <p>Safe blood saves lives and improves health. Blood transfusion is needed for:</p>
                            <p>Women with complications of pregnancy, such as ectopic pregnancies and haemorrhage before, during or after childbirth;</p>
                            <hr />
                            <p>children with severe anaemia often resulting from malaria or malnutrition;</p>
                            <hr />
                            <p>Many complex medical and surgical procedures and cancer patients.</p>
                            <p style={{ textAlign: "justify" }}>It is also needed for regular transfusions for people with conditions such as thalassaemia and sickle cell disease and is used to make products such as clotting factors for people with haemophilia. There is a constant need for regular blood supply because blood can be stored for only a limited time before use. Regular blood donations by a sufficient number of healthy people are needed to ensure that safe blood will be available whenever and wherever it is needed.
                                Blood is the most precious gift that anyone can give to another person — the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components — red cells, platelets and plasma — which can be used individually for patients with specific conditions</p>
    
    
                        </Col>
                    </Row>
    
                </div>
                <Footer />
           </div>

        </>

    )
}

export default Adminc
