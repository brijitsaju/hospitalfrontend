import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { allappointment } from '../services/allAPI'

function SeeApp() {
     const [seeAppointment, setSeeAppointmen] = useState([])

    const getallappoints=async()=>{
        if(sessionStorage.getItem("token")){
          const token=sessionStorage.getItem("token")
           const reqheader={
             "Content-Type":"application/json",
         "Authorization":`Bearer ${token}`
           }
          const result=await allappointment(reqheader)
        console.log(result.data);
        if(result.status===200){
            setSeeAppointmen(result.data)
          console.log(seeAppointment);
          }
      }
      }
    useEffect(()=>{
        getallappoints()
        },[])
    console.log(seeAppointment);



  return (
    <div>
       
        <div>
            <h1 className='d-flex justify-content-center align-items-center m-5'>Appointments taken by Patients</h1><br />
            <Table striped hover variant="light" className='container mb-5'>
                <thead>
                    <tr>
                        <th>Sl.No.</th>
                        <th>Patient Name</th>
                        <th>Place</th>
                        <th>age</th>
                        <th>Symptoms</th>
                        <th>Doctor Name</th>
                        <th>Contact Number</th>
                        
                       
                    </tr>
                </thead>
                {seeAppointment?.length>0?seeAppointment?.map((item,index)=>( <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.place}</td>
                        <td>{item. age}</td>
                        <td>{item.disease}</td>
                        <td>{item.docname}</td>
                        <td>{item.contactnumber}</td>
                    </tr>
                </tbody>)):<p className='text-danger fw-bolder fs-5'>No  uploaded yet</p>}
            </Table>
        </div>
     
    </div>
  )
}

export default SeeApp
