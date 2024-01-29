import React, { useContext, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from './Header'
import Table from 'react-bootstrap/Table';
import { addDoc, alldoc, deletedoc } from '../services/allAPI';
import Swal from 'sweetalert2';
import EditDocdetails from './EditDocdetails';
import { BASE_URL } from '../services/baseurl';
import { editresrespcon } from '../contents/ContextShare';

function AddDoc() {
    const { editresppcon, seteditrespcon } = useContext(editresrespcon);
    const [preview, setPreview] = useState("")
    const [seeDoclist, setSeeDoclist] = useState([])
    const seedoclist = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqheader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await alldoc(reqheader)
            console.log(result.data);
            if (result.status === 200) {
                setSeeDoclist(result.data)
                console.log(seeDoclist);
            }
        }
    }
    useEffect(() => {
        seedoclist()
    }, [editresppcon])
    console.log(seeDoclist);
    // delete doc
    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await deletedoc(id, reqHeader)
        console.log(result);
        if (result.status === 200) {
            seedoclist()
        }
    }

    const [docDetails, setDocDetails] = useState({
        name: "",
        department: "",
        exper: "",
        comment: "",
        docImage: ""
    })
    console.log(docDetails);

    //state to hold the token
    const [token, setToken] = useState("")

    useEffect(() => {
        if (docDetails.docImage) {
            (setPreview(URL.createObjectURL(docDetails.docImage)))
        }
    }, [docDetails.docImage])

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        else {
            setToken("")
        }
    }, [])

    console.log(preview);

    const handleAdd = async (e) => {
        e.preventDefault()
        const { name, department, exper, comment, docImage } = docDetails
        if (!name || !department || !exper || !comment || !docImage) {
            Swal.fire({
                title: "Incomplete",
                text: 'Please fill the form',
                icon: "danger"
            });
        } else {

            //reqBody
            const reqBody = new FormData()
            reqBody.append("name", name)
            reqBody.append("department", department)
            reqBody.append("exper", exper)
            reqBody.append("comment", comment)
            reqBody.append("docImage", docImage)


            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
}

                const result = await addDoc(reqBody, reqHeader)
                console.log(result);
                if (result.status === 200) {
                    console.log(result.data);
                    Swal.fire({
                        title: "Successful",
                        text: 'Doctor added successfuly',
                        icon: "success"
                    });
                    seedoclist()
                    setDocDetails({
                        name: "",
                        department: "",
                        exper: "",
                        comment: "",
                        docImage: ""
})
                    setPreview('')

                }
                else {
                    console.log(result.response.data);
                }

            }

        }
    }

    return (
        <>
            <Header />
            <div className='mt-5'><h1 style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>ADD DOCTORS</h1></div>
            <Row>
                <Col md={2} sm={12}></Col>
                <Col md={8} sm={12}>
                    <div style={{ padding: "40px", background: "linear-gradient(to right, #3498db, #ffffff)", margin: "50px", borderRadius: "5px" }} className='  boder box shadow  justify-content-center'>
                        <Row>
                            <Col md={6} sm={12}>
                                <label htmlFor="image" className='text-center'>
                                    <input id="image" type="file" style={{ display: "none" }} onChange={(e) => setDocDetails({ ...docDetails, docImage: e.target.files[0] })} />

                                    <img style={{ padding: '0px' }} width={"350px"} src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"} alt="" />
                                </label>
                            </Col>
                            <Col md={6} sm={12} style={{ marginTop: "20px" }}>
                                <div className="mb-3 w-100"><input type="text" className='form-control' placeholder='Doctor Name' value={docDetails.name} onChange={(e) => setDocDetails({ ...docDetails, name: e.target.value })} />
                                </div>
                                <div className="mb-3 w-100"><input type="text" className='form-control' placeholder='Department' value={docDetails.department} onChange={(e) => setDocDetails({ ...docDetails, department: e.target.value })} />
                                </div>
                                <div className="mb-3 w-100"><input type="text" className='form-control' placeholder='Experience' value={docDetails.exper} onChange={(e) => setDocDetails({ ...docDetails, exper: e.target.value })} />
                                </div>
                                <div className="mb-3 w-100"><textarea style={{ height: "110px" }} type="text" className='form-control' placeholder='Any Comments' value={docDetails.comment} onChange={(e) => setDocDetails({ ...docDetails, comment: e.target.value })} />
                                </div>

                                <button onClick={handleAdd} className='btn btn-primary'>ADD</button>

                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={2} sm={12}></Col>

            </Row>
            <Table striped hover variant="light" className='container'>
                <thead>
                    <tr>
                        <th>sl.no.</th>
                        <th>Image</th>
                        <th>Doctors</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                {seeDoclist?.length > 0 ? seeDoclist?.map((item, index) => (<tbody>
                    <tr>
                        <td>{index + 1}</td>
                        <td>
                            <img
                                src={item.docImage ? `${BASE_URL}/uploads/${item.docImage}` : "https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"}
                                alt="" height={"100px"} width={'100px'}
                                className="img-fluid rounded-circle" />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.exper}</td>
                        <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>DELETE</button></td>
                        <td><EditDocdetails edit={item} /></td>


                    </tr>
                </tbody>)) : <p className='text-danger fw-bolder fs-5'>No  uploaded yet</p>}
            </Table>


        </>
    )
}

export default AddDoc


