//register API
import { BASE_URL } from "./baseurl";
import { commonAPI } from "./commonAPI";

export const registerAPI =async(user)=>{
  return  await commonAPI('POST',`${BASE_URL}/user/register`,user,"")
}

export const loginAPI =async(user)=>{
    return  await commonAPI('POST',`${BASE_URL}/user/login`,user,"")
  }

  //add doc
  export const addDoc =async(reqBody,reqHeader)=>{
    return  await commonAPI('POST',`${BASE_URL}/admin/adddoc`,reqBody,reqHeader)
  }

  //blood register
  export const blooddonars = async (reqBody) => {
    return  await commonAPI('POST', `${BASE_URL}/user/blood/register`, reqBody,"");
    
}

//see blood donar
export const alldonars=async(reqheader)=>{
  //query parameter=path?key
    return  await commonAPI('GET',`${BASE_URL}/blood/seedonars`,"",reqheader)
  }

//see add doc
export const alldoc=async(reqheader)=>{
  //query parameter=path?key
    return  await commonAPI('GET',`${BASE_URL}/doc/addlist`,"",reqheader)
  }

// edit doc
export const editdoc=async(docId,reqBody,reqHeader)=>{
  //query parameter=path?key
    return  await commonAPI('PUT',`${BASE_URL}/doc/edit/${docId}`,reqBody,reqHeader)
  }

// delete doc

export const deletedoc=async(docId,reqHeader)=>{
  //query parameter=path?key
    return  await commonAPI('DELETE',`${BASE_URL}/doc/remove/${docId}`,{},reqHeader)
  }

//register for doc appoint in user side
 //blood register
 export const patientapp = async (reqBody) => {
  return  await commonAPI('POST', `${BASE_URL}/patient/appointment/register`, reqBody);
  
}
// delete donar

export const deletedonar=async(docId,reqHeader)=>{
  //query parameter=path?key
    return  await commonAPI('DELETE',`${BASE_URL}/patient/remove/${docId}`,{},reqHeader)
  }

//see allappointment
export const allappointment=async(reqheader)=>{
  //query parameter=path?key
    return  await commonAPI('GET',`${BASE_URL}/patient/appointment`,"",reqheader)
  }

//see displayDoctors
export const displayDoctors=async(reqheader)=>{
  //query parameter=path?key
    return  await commonAPI('GET',`${BASE_URL}/doctor/display`,"",reqheader)
  }
