import { useContext } from "react";
import { contactContext } from '../context/contactContext'

import { Purple } from "../helpers/color"

const SearchContact = ({query , search}) => {

    const {contactQuery,contactsSearch} = useContext(contactContext)

    return(
        <div className="input-group mx-2 w-75">
            <span className="input-group-text" id="basic-addont"
             style={{backgroundColor : Purple}}>
                
                <i class="fa fa-blind" aria-hidden="true"></i>
            </span>
            <input type="text" value={contactQuery.text} onChange={contactsSearch}
             className="form-control" placeholder="search contact" aria-label="Search" />
        </div>
    )
}

export default SearchContact;