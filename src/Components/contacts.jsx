import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";

import { contactContext } from "../context/contactContext";
import Cont from "./Contact/cont"   
import { CurrentLine, Orange, Pink ,} from "../helpers/color"



const Contacts = () => {
    const { deleteContact , contacts} = useContext(contactContext)

    return (
        <>
        <section className="container">
            <div className="grid">
                <div className="row">
                    <div className="col">
                        <p className="h3">
                        <Link
                  to={"/contacts/add"}
                  className="btn mx-2"
                  style={{ backgroundColor: Pink }}
                >
                  <b>Create New Contact</b>
                  <i className="fa fa-plus-circle mx-2" />
                </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="container">
            <div className="row">
                {
                    contacts.length > 0 ? contacts.map( c => (
                       <Cont key={c.id} contact={c} confirmDelete={() => deleteContact(c.id , c.fullname)} /> 
                    )) :
                        (
                        <div className="text-center py-5" style={{backgroundColor: CurrentLine}}>
                                <p className="h3" style={{color:Orange}}>
                                    Contact not Found
                                </p>
                                <img src={require("../assets/no-found.gif")} className="w-25" alt="" />
                        </div>
                    )
                }
             
            </div>
        </section>
        </>
    )
}

export default Contacts;