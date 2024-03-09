import {useState , useEffect} from 'react';
import { Routes , Route , Navigate , useNavigate } from "react-router-dom"
import { confirmAlert } from "react-confirm-alert";
import toast,{ Toaster } from 'react-hot-toast';


import { contactContext } from './context/contactContext'
import { getAllContact , getAllgroups , creatContact , deletContact } from "./services/contactService"

import Navbar from './Components/navbar';
import "./index.css"
import Contacts from './Components/contacts';
import AddContact from './Components/Contact/addContact';
import EditContact from './Components/Contact/editContact';
import ViewContact from './Components/Contact/viewContact';
import { Comment, CurrentLine, Foreground, Purple, Yellow } from './helpers/color';
import './App.css';


const App = () => {

  const [ contacts , setContacts ] = useState([]);
  const [filteredContact , setFilteredContact] =useState([]);
  const [ group , setgroup ] = useState([]);
  const [ Contact,setContact] = useState({});
  const [contactQuery , setContactQuery] = useState({ text :"" });

  const navigate = useNavigate();

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
      const{status} = await creatContact(Contact)
      if(status === 201) {
        toast.success("مخاطب با موفقیت ساخته شد",{icon:"👽"})
        setContact({})
        navigate("/contacts")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const onContactChange = (event) => {
    setContact({...Contact,[event.target.name] : event.target.value})
  }

  const confirmDelete = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CurrentLine,
              border: `1px solid ${Purple}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: Yellow }}>پاک کردن مخاطب</h1>
            <p style={{ color: Foreground }}>
              مطمئنی که میخوای مخاطب {contactFullname} رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: Purple }}
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: Comment }}
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };

  const removeContact = async (contactId) => {
    try {
      const response = await deletContact(contactId);
      if (response) {
        const { data: contactsData } = await getAllContact();
        
        toast.error("مخاطب با موفقیت حذف شد" , {icon : "💣"})
        setContacts(contactsData);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const contactSearch = (event) => {
    setContactQuery({ ...contactQuery, text: event.target.value });
    const allContacts = contacts.filter((contact) => {
      return contact.fullname
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setFilteredContact(allContacts);
  };  

  return (
    <contactContext.Provider value={{
      contact: Contact,
      setContact: setContact,
      setFilteredContacts:setFilteredContact,
      contacts:contacts,
      contactQuery:contactQuery,
      filteredContacts:filteredContact,
      groups:group,
      onContactChange:onContactChange,
      createContact:createContactForm,
      deleteContact: confirmDelete,
      contactsSearch:contactSearch,
    }}>
      <div className={"app"}>
        <Toaster />
        <Navbar />

      <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
        <Route path='/contacts' element={ <Contacts/> }/>
        <Route path='/contacts/add'element={ <AddContact /> } />   
        <Route path='/contacts/edit/:contactId' element={<EditContact />} />
        <Route path='/contacts/:contactId' element={<ViewContact />} />
        
      </Routes>  

        
      </div>
      </contactContext.Provider>
  )
}

export default App;