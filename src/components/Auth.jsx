import React, { useContext, useEffect, useState } from 'react'
import { Row, Col, Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { loginAPI, registerAPI } from '../services/allAPI'
import "./auth.css"

import { isAuthTokenContext } from '../contents/ContextShare'
import Swal from 'sweetalert2'

function Auth({ register }) {

    const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
    //crete a state to hold value of user registration details
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.getItem("token")) {

            setIsAuthToken(true)
        }
    }, [])

    const registerForm = register ? true : false
    console.log(userData);

    const handleRegister = async (e) => {
        e.preventDefault()

        const { username, email, password } = userData

        if (!username || !email || !password) {
            Swal.fire({
                title: "Incomplete",
                text: 'Please fill the Registration form',
                icon: "danger"
            });
        }
        else {
            const result = await registerAPI(userData)
            console.log(result.data);
            if (result.status === 200) {

                Swal.fire({
                    title: `${result.data.username} registered sucessfully`,
                    text: ' Registered',
                    icon: "success"
                });
                setUserData({
                    username: "",
                    email: "",
                    password: ""
                })
                navigate('/')
            }
            else {
                alert(result.response.data)
            }
        }

    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        if (!email || !password) {
            Swal.fire({
                title: "Incomplete",
                text: 'Please fill the form',
                icon: "danger"
            });
        }
        else {
            // api call
            const result = await loginAPI(userData)
            console.log(result);

            if (result.status === 200) {

                Swal.fire({
                    title: "Successfull",
                    text: ' Login Succesful',
                    icon: "success"
                });
                setIsAuthToken(true)
                //store
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token", result.data.token)
                //empyty
                setUserData({
                    username: "",
                    email: "",
                    password: ""
                })

                //navigate
                setTimeout(() => {
                    navigate('/home')
                }, 3000)

            } else {
                alert(result.response.data)
            }
        }
    }

    return (
       
            <div>
                <div className='image'>
                    <Navbar className="bg-info">
                        <Container>
                            <Navbar.Brand href="#home">
                                {' '}
                                Healthcare
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <div>
                        <h3 className='p-5 text-center'>Schedule <span className='text-info'>Appointments with Doctors</span> <br />& <br />
                            Register for <span className='text-danger'>Blood Donation</span> </h3>
                        <div style={{ textAlign: 'center', justifyContent: 'center', width: '900px', height: '650px' }} className='container-fluid rounded'>
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <div className='d-flex align-items-center justify-content-center flex-column border mt-2' style={{ height: "430px" }}>
        
                                        <h1 className='mt-3' >
                                            <i className='fa-1x fa-solid fa-user'></i>
                                            {registerForm ? "Sign Up" : "Sign In"}
                                        </h1>
                                        <h5 style={{ color: 'white' }}>
                                            {registerForm ? 'Sign Up to your Account' : 'Sign in to your Account '}
                                        </h5>
                                        <Form className='form p-3 w-100'>
                                            {
                                                registerForm && <Form.Group className="mb-4" controlId="formBasicUsername">
        
                                                    <Form.Control type="text" placeholder="Enter username" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
        
                                                </Form.Group>
                                            }
        
                                            <Form.Group className="mb-4 " controlId="formBasicEmail">
                                                <Form.Control
                                                    type="email" placeholder="Enter email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                                            </Form.Group>
        
                                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Enter password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                            </Form.Group>
        
                                            {registerForm ?
                                                <div>
                                                    <button onClick={handleRegister} className='btn btn-success rounded '>Register</button><br />
                                                    <p >Already a user? Click here to <Link style={{ color: "blue", textDecoration: "none" }} to={'/'}>Login</Link></p>
                                                </div> :
                                                <div>
                                                    <button onClick={handleLogin} className='btn btn-success rounded'>Login</button> <br />
                                                    <p >New User? Click here to <Link style={{ color: "blue", textDecoration: "none" }} to={'/register'}>Register</Link></p>
                                                </div>
                                            }
                                        </Form>
                                    </div>
                                </Col>
                                <Col md={6}><img height={"430px"} width={"500px"} src="https://cdn.dribbble.com/users/6498639/screenshots/15142979/media/4018bc54be33f8aae19fef3d64efdf6e.gif" alt="" /></Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
     

    )
}

export default Auth
