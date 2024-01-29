import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseurl';
import { editdoc } from '../services/allAPI';
import Swal from 'sweetalert2';
import { editresrespcon } from '../contents/ContextShare';

function EditDocdetails({edit}) {
  const { editresppcon, seteditrespcon } = useContext(editresrespcon);
    const [show, setShow] = useState(false);
    const [docDetails, setDocDetails] = useState({
        id:edit._id,
        name: edit.name,
        department: edit.department,
        exper: edit.exper,
        comment: edit.comment,
        docImage: ""
    })
    const[preview,setPreview]=useState("")

    useEffect(()=>{
if(docDetails.docImage){
   setPreview (URL.createObjectURL(docDetails.docImage))
}
    },[docDetails.docImage])
const handleClose1=()=>{
    setDocDetails({
        id:edit._id,
        name: edit.name,
        department: edit.department,
        exper: edit.exper,
        comment: edit.comment,
        docImage: ""

    })
    setPreview("")
}
    const handleClose = () =>{ setShow(false);
    handleClose1()}
    const handleShow = () => setShow(true);

const handleUpdate=async()=>{
    const { id,name, department, exper, comment,docImage} = docDetails
        if (!name || !department || !exper || !comment ) {
            Swal.fire({
                title: "Incomplete",
                text: 'Please fill the form',
                icon: "danger"
            });
        }else{
            const reqBody=new FormData()
            reqBody.append("name",name)
            reqBody.append("department",department)
            reqBody.append("exper",exper)
            reqBody.append("comment",comment)
            preview?reqBody.append("docImage",docImage):reqBody.append("docImage",edit.docImage)
        
        
        const token=sessionStorage.getItem("token")
        if(preview){
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
            const result=await editdoc(id,reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
              Swal.fire({
                title: "Successful",
                text: ' Saved Changes',
                icon: "success"
            });
            seteditrespcon(result.data)
                handleClose()

            }
            else{
                console.log(result.resonpse.data);
            }
        }
        else{
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result=await editdoc(id,reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
              Swal.fire({
                title: "Successfull",
                text: ' Changes Saved',
                icon: "success"
            });
            seteditrespcon(result.data)
                handleClose()
                

            }
            else{
                console.log(result.resonpse.data);
            }
        }
        
    }
        }


  return (
    <div>
        <button className='btn btn-success' onClick={handleShow}>EDIT</button>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit Doctor's Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={4}>
                <label htmlFor="images" className="text-center">
                  <input
                    id="images"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => setDocDetails({ ...docDetails, docImage: e.target.files[0] })}
                  />
                  <img
                    style={{ padding: '0px', width: "100%", maxHeight: "400px", objectFit: "cover" }}
                    src={preview ? preview : `${BASE_URL}/uploads/${edit.docImage}`}
                    alt=""
                  />
                </label>
              </Col>
              <Col md={8}>
                
                <div className="mb-3 w-100">
                  <input type="text" className="form-control" placeholder="Doctor Name" value={docDetails.name} onChange={(e) => setDocDetails({ ...docDetails, name: e.target.value })} />
                </div>

                <div className="mb-3 w-100">
                  <input type="text" className="form-control" placeholder="Department" value={docDetails.department} onChange={(e) => setDocDetails({ ...docDetails, department: e.target.value })} />
                </div>

                <div className="mb-3 w-100">
                  <input type="text" className="form-control" placeholder="Experience" value={docDetails.exper} onChange={(e) => setDocDetails({ ...docDetails, exper: e.target.value })} />
                </div>

                <div className="mb-3 w-100">
                  <textarea style={{ height: "110px" }} type="text" className="form-control" placeholder="Any Comments" value={docDetails.comment} onChange={(e) => setDocDetails({ ...docDetails, comment: e.target.value })} />
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default EditDocdetails
