
import React from 'react'
import Header from '../components/Header'
import med1 from '../images/med1.avif'
import med2 from '../images/med2.jpg'
import med3 from '../images/med3.webp'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
      
      <div>
            <Header />
            <div>
                <div style={{ position: "relative" }}>
                    <div className='col-6' style={{ position: "absolute", textAlign: "center", margin: "40px" }}>
                        <h1 style={{marginTop:"50px",fontWeight:"bolder",fontSize:"80px"}} className='head'>Healthe Care</h1>
                        <p className='para1' style={{textAlign:"justify",padding:"20px"}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque magnam saepe molestias, distinctio quis minus tenetur ipsam maiores veniam dolores voluptatibus reprehenderit earum aspernatur possimus, animi accusantium ex aperiam repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, officia facere voluptate et error facilis quos dicta temporibus dolorem maiores incidunt eius alias, accusantium possimus, doloremque minima laborum praesentium </p>
                        <br />
                        <br />

                        <Link to={'/adddoc'}> <button className='btn btn-primary'>Add doctors</button></Link>
                       <Link to={'/seeappoint'}> <button className='btn btn-success'>See Appointment</button></Link>
                       <Link to={'/seedonars'}> <button className='btn btn-danger'>See Donars</button></Link>
                        
                        

                    </div>
                    <img className='image' width={'100%'} height={'650px'} src={med1} alt="" />

                </div>
                <div>
                    <div className='container-fulid'>
                        <Row style={{ padding: "80px" }} >
                            <Col sm={12} md={4}>
                                <h1>Our <br />Departments</h1>
                                <p>To undertake specialized and holistic healthcare services of world standard and to provide them to all sections....</p>

                            </Col>
                            <Col sm={12} md={8}>


                                <div  >
                                    <div className='d-flex ' style={{ justifyContent: "space-evenly" }}>
                                        <h1 style={{ fontSize: "25px", color: "rosybrown" }}>General Medicine</h1>
                                        <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Gastrointestinal Sciences</h1>
                                        <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Neurology</h1>
                                    </div>
                                    <br />
                                    <hr />
                                    <br />
                                    <div className='d-flex' style={{ justifyContent: "space-around" }}>
                                        <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Surgical Oncology</h1>
                                        <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Neurosurgery</h1>
                                        <h1 style={{ fontSize: "25px", color: "rosybrown" }}>Cardiology</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{}}>
                    <Row>
                        <Col style={{ backgroundColor: "rosybrown", height: "550px", padding: "60px", paddingTop: "100px" }} sm={12} md={6}>

                            <h1 className=''>Telemedicine</h1><br /><br />
                            <p>Telemedicine is a service which can help a patient/ doctor/ hospital in a remote location to consult with a Super Specialist at Rajagiri Hospital, using ICT (Information and Communication Technology) for the purpose of Diagnosis, Treatment, Second Opinion or Follow-up.</p>


                        </Col>
                        <Col sm={12} md={6}>
                            <img style={{ width: "600px", height: "550px" }} src={med2} alt="" />
                        </Col>
                    </Row>
                </div>
                <br />
                <br />
                <Row>
                    <Col md={1} sm={12}></Col>
                    <Col md={10} sm={12}>
                        <div style={{ position: "relative", opacity: ".8" }}>
                            <div style={{ position: "absolute", textAlign: "center", margin: "100px" }}>
                                <h1 className='head ' style={{ color: "black", fontWeight: "bolder" }}>Get Cared For By The Best</h1> <br />
                                <p className='para1' style={{ color: "black", marginTop: "30px", textAlign: "justify", marginLeft: "70px", fontWeight: "bolder" }} >In the short span of its existence, Rajagiri Hospital has created its niche on the map of quality healthcare delivery in South India by touching nearly 2 million lives. Having earned the trust and loyalty of patients through the compassion of its caregivers and high-precision medical technology, the institution has emerged as the leading quaternary care facility in the region.

                                </p><br /><br />
                                <Link to={'/docselect'}><Button style={{ backgroundColor: "white", color: "black" }} className='btn btn-outline rounded'>Add Doctor<i class="fa-solid fs-1x fa-arrow-right fa-beat ms-1"></i></Button></Link>
                            </div>
                            <img style={{ marginLeft: "130px", opacity: "1" }} className='image' width={'80%'} height={'490px'} src={med3} alt="" />

                        </div>

                    </Col>
                    <Col md={1} sm={12}></Col>
                </Row>



            </div>

            <br />
            <div  style={{ position: "relative" ,opacity:"" }}> 
            <div style={{ position: "absolute" }}>
                <h1  style={{fontWeight:"bolder",color:"white",fontSize:"90px",marginTop:"90px",textAlign:"center"}}>Give the gift of life Donate Blood</h1>
                <Link to={''}> <button style={{ color: "red", fontSize: "30px", marginLeft: "490px", marginTop: "80px",borderRadius:"10px",fontWeight:"bolder",backgroundColor:"white" }}>See Donors <i class="fa-solid fa-arrow-right fa-beat"></i></button></Link>
                </div><img style={{ width: "100%", height: "600px " ,opacity:""}} src="https://wallpaperaccess.com/full/2726148.jpg" alt="" />
                
            
            </div>
            <br />

         <div className='container'>
            <Row>
            <Col md={6} sm={12}>
                <h1>Why should I donate blood?</h1>
                <img style={{width:"60%",marginLeft:"110px",height:"80%"}} src="https://blood-donor.in/wp-content/uploads/2020/12/pngkey.com-donation-png-1753871-1638x2048.png" alt="" />
            </Col>
            <Col md={6} sm={12}>
                <p>Safe blood saves lives and improves health. Blood transfusion is needed for:</p>
                <p>Women with complications of pregnancy, such as ectopic pregnancies and haemorrhage before, during or after childbirth;</p>
                <hr />
                <p>children with severe anaemia often resulting from malaria or malnutrition;</p>
                <hr />
                <p>Many complex medical and surgical procedures and cancer patients.</p>
                <p>It is also needed for regular transfusions for people with conditions such as thalassaemia and sickle cell disease and is used to make products such as clotting factors for people with haemophilia. There is a constant need for regular blood supply because blood can be stored for only a limited time before use. Regular blood donations by a sufficient number of healthy people are needed to ensure that safe blood will be available whenever and wherever it is needed.
Blood is the most precious gift that anyone can give to another person — the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components — red cells, platelets and plasma — which can be used individually for patients with specific conditions</p>


            </Col>
            </Row>
         </div>

              
            

        </div>


    </div>
  )
}

export default Admin
