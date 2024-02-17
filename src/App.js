import './App.css';
import {useState , useEffect} from 'react';
import { Routes , Route , Navigate , useNavigate } from "react-router-dom"

import axios from 'axios';
import { getAllContact , getAllgroups , creatContact } from "./services/contactService"
import Navbar from './Components/navbar';
import "./index.css"
import Contacts from './Components/contacts';
import AddContact from './Components/Contact/addContact';
import EditContact from './Components/Contact/editContact';
import ViewContact from './Components/Contact/viewContact';



const App = () => {

  const [ getcontacts , setContacts ] = useState([]);
  const [ getgroup , setgroup ] = useState([]);
  const [ getContact,setContact] = useState({
    fullname : "",
    photo : "",
    mobile : "",
    email: "",
    job : "",
    group : ""
  })

  const Navigate = useNavigate();

  useEffect( () => {
    const fetchData = async () => {
      try {
        const { data: contactsData } = await getAllContact();
        const { data: groupsData } = await getAllgroups();
  
        setContacts(contactsData);
        setgroup(groupsData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  } ,[])

  const  createContactForm = async event => {
    event.preventDefault();
    try {
      const{status} = await creatContact(getContact)
      if(status === 201) {
        setContact({})
        Navigate("/contacts")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const setContactInfo = (event) => {
    setContact({...getContact,[event.target.name] : event.target.value})
  }
  

  return (
      <div className={"app"}>

        <Navbar />

      <Routes>
        <Route path='/' element={<Navigate to="/contacts" />} />
        <Route path='/contacts' element={ <Contacts cont={ getcontacts } /> }/>
        <Route path='/contacts/add'
         element=
         { <AddContact 
          setContactInfo={setContactInfo}
          Contact={getContact} 
          groups={getgroup}
          createContactForm={createContactForm} /> }
           />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        <Route path='/contacts/:contactId' element={<EditContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        
      </Routes>  

        
      </div>
  )
}

export default App;