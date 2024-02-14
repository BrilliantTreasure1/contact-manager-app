import './App.css';
import {useState} from 'react';
import { Routes , Route , useNavigate, Navigate } from "react-router-dom"

import Navbar from './Components/navbar';
import "./index.css"
import Contacts from './Components/contacts';
import AddContact from './Components/Contact/addContact';
import EditContact from './Components/Contact/editContact';
import ViewContact from './Components/Contact/viewContact';


const App = () => {

  const [ getcontact , setContact ] = useState([])

  return (
      <div className={"app"}>

        <Navbar />

      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />} />
        <Route path='/contacts' element={ <Contacts cont={ getcontact } /> }/>
        <Route path='/contacts/add' element={ <AddContact /> } />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        <Route path='/contacts/:contactId' element={<EditContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        
      </Routes>  

        
      </div>
  )
}

export default App;