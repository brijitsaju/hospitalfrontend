import React, { useState } from 'react'
import { blooddonars } from '../services/allAPI';
import Swal from 'sweetalert2';


function Bloodlogin() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dateofbirth: '',
        bloodgroup: '',
        place: '',
        contactnumber: '',
    });
    console.log(formData);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, dateofbirth, bloodgroup, place, contactnumber } = formData
        if (!name || !email || !dateofbirth || !bloodgroup || !place || !contactnumber) {
            Swal.fire({
                title: "Incomplete",
                text: 'Please fill the form',
                icon: "danger"
            });
        }
        else {
            // api call
            const result = await blooddonars(formData)
            console.log(result);

            if (result.status === 200) {

                //empyty
                setFormData({
                    name: '',
                    email: '',
                    dateofbirth: '',
                    bloodgroup: '',
                    place: '',
                    contactnumber: '',
                })
                Swal.fire({
                    title: "Successfull",
                    text: ' Registered',
                    icon: "success"
                });


            } else {
                alert(result.response.data)
            }
        }
    }
    console.log('Form submitted:', formData);


    return (

        <>
       
       <div className="d-flex justify-content-center" style={{ marginTop: "60px" }}>
    <img className="img-fluid" src="https://www.friends2support.org/imgs/landingpage/register.gif" alt="" />
</div>


            <h5 className="text-center text-danger">[Where Strangers Become Friends]</h5>
            <div className="container mt-4 " style={{ width: "400px", height: "450px", marginBottom: "170px" }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 form-control p-4 ">

                        <form >
                            <div className="mb-3">

                                <input
                                    type="text" id="name" name="name" placeholder='Name'
                                    className="form-control" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3" >

                                <input
                                    type="email" id="email" name="email" placeholder='Email'
                                    className="form-control" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="date" id="age" name="age" placeholder='DOB' className="form-control" value={formData.dateofbirth} onChange={(e) => setFormData({ ...formData, dateofbirth: e.target.value })}
                                    required
                                />
                            </div>


                            <div className="mb-3">
                                <select
                                    id="bloodGroup" name="bloodGroup"
                                    className="form-control" value={formData.bloodgroup} onChange={(e) => setFormData({ ...formData, bloodgroup: e.target.value })}
                                    required
                                >
                                    <option value="" disabled selected>Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>


                            <div className="mb-3">

                                <input
                                    type="text"
                                    id="place"
                                    name="place"
                                    placeholder='Place'
                                    className="form-control"
                                    value={formData.place} onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-3">

                                <input
                                    type="tel"
                                    id="contactnumber"
                                    name="contactnumber"
                                    placeholder='Contactnumber'
                                    className="form-control"
                                    value={formData.contactnumber} onChange={(e) => setFormData({ ...formData, contactnumber: e.target.value })}
                                    required
                                />
                            </div>

                            <button onClick={handleSubmit} type="submit" className="btn btn-danger w-100 mt-3">Register</button>
                        </form>
                    </div>
                </div>
                <br />


            </div>




        </>
    )
}

export default Bloodlogin
