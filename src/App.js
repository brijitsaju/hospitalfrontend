
import { Route, Routes } from 'react-router';
import './App.css';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Bloodlogin from './pages/Bloodlogin';
import DocDetails from './pages/DocDetails';
import Auth from './components/Auth';
import AddDoc from './components/AddDoc';
import SeeApp from './components/SeeApp';
import SeeDonars from './components/SeeDonars';
import { useContext } from 'react';
import { isAuthTokenContext } from './contents/ContextShare';

function App() {
  const {isAuthToken,setIsToken}=useContext(isAuthTokenContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={isAuthToken?<Home />:<Auth/>} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/docdetails' element={<DocDetails/>} />
        <Route path='/adddoc' element={<AddDoc />} /> 
        <Route path='/bloodlogin' element={<Bloodlogin />} />
        <Route path='/' element={<Auth/>}/>
        <Route path='/register' element={<Auth  register/>}/>
        <Route path='/seeappoint' element={<SeeApp/>}/>
        <Route path='/seedonars' element={<SeeDonars/>}/>
       
      </Routes>
      
      

</div>
  );
}

export default App;
