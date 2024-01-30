import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { patientapp } from '../services/allAPI';
import Swal from 'sweetalert2';

function TakeApoint({docname}) {
  
    const [formData, setFormData] = useState({
        name: '',
        place: '',
        age: '',
        disease: '',
        docname:docname.name,
        contactnumber: '',
      });
      console.log(formData);
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, place, age, disease, docname ,contactnumber} = formData
        if (!name || !place || !age || !disease || !docname || !contactnumber) {
          Swal.fire({
            title: "Incomplete",
            text: 'Please fill the form',
            icon: "danger"
        });
        }
        else {
          // api call
          const result = await patientapp(formData)
          console.log(result);
    
          if (result.status === 200) {
    
            //empyty
            setFormData({
              name: '',
        place: '',
        age: '',
        disease: '',
        docname: '',
        contactnumber: '',
            })
            Swal.fire({
              title: "Successfull",
              text: ' Appointment Booked',
              icon: "success"
          });
          handleClose()

    
    
          } else {
            alert(result.response.data)
          }
        }
      }
      console.log('Form submitted:', formData);
    
    
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>

<Button className='' onClick={handleShow}>Take Appointment</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus  value={formData.place} onChange={(e) => setFormData({ ...formData, place: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                autoFocus  value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Symptoms</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus  value={formData.disease} onChange={(e) => setFormData({ ...formData, disease: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus  value={formData.docname}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus  value={formData.contactnumber} onChange={(e) => setFormData({ ...formData, contactnumber: e.target.value })}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleSubmit}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TakeApoint
