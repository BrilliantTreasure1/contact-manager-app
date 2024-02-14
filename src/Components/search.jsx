import { Purple } from "../helpers/color"

const SearchContact = () => {
    return(
        <div className="input-group mx-2 w-75">
            <span className="input-group-text" id="basic-addont"
             style={{backgroundColor : Purple}}>
                
                <i className="fas fa-search"></i>
            </span>
            <input type="text" className="form-control" placeholder="search contact" aria-label="Search" />
        </div>
    )
}

export default SearchContact;