import React from "react";
import { Link } from "react-router-dom";

import Cont from "./Contact/cont"   
import { CurrentLine, Orange, Pink ,} from "../helpers/color"



const Contacts = ({cont}) => {
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
                    cont.length > 0 ? cont.map( c => (
                       <Cont key={c.id} contact={c} /> 
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