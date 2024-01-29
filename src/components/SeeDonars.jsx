import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { alldonars, deletedonar } from '../services/allAPI'

function SeeDonars() {
  const [seeDonar, setSeeDonar] = useState([])
  const getalldonars = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqheader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await alldonars(reqheader)
      console.log(result.data);
      if (result.status === 200) {
        setSeeDonar(result.data)
        console.log(seeDonar);
      }
    }
  }
  useEffect(() => {
    getalldonars()
  }, [])
  console.log(seeDonar);
  // delete donar
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await deletedonar(id, reqHeader)
    console.log(result);
    if (result.status === 200) {
      getalldonars()
    }
    else {
      console.log(result.response.data);
    }
  }
  return (
    <div>
      <div>
        <h1 className='d-flex justify-content-center align-items-center m-5 text-danger'>BLOOD DONARS</h1><br />
        <Table striped hover variant="light" className='container mb-5'>
          <thead>
            <tr>
              <th>sl.no.</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Blood Group</th>
              <th>Place</th>
              <th>Contact Number</th>
              <th>DELETE</th>

            </tr>
          </thead>
          {seeDonar?.length > 0 ? seeDonar?.map((item, index) => (<tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.dateofbirth}</td>
              <td>{item.bloodgroup}</td>
              <td>{item.place}</td>
              <td>{item.contactnumber}</td>
              <th><button onClick={() => handleDelete(item._id)}>DELETE</button></th>
            </tr>
          </tbody>)) : <p className='text-danger fw-bolder fs-5'>No  uploaded yet</p>}
        </Table>
      </div>
    </div>
  )
}

export default SeeDonars
