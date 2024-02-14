import SearchContact from "./search";

import { Background , Purple} from "../helpers/color"

const Navbar = () => {
 return (
    <nav className="navbar navbar-dark navbar-expend-sm shadow-lg"
    style={{backgroundColor: Background }}>

        <div className="container">
            <div className="row w-100">
                <div className="col">
                    
                    <div className="navbar-brand">
                        <i className="fa fa-id-badge"></i>
                         <span style={{color: Purple}}><b> contact manager</b></span>{"  "}
                       <b>web application</b> 
                    </div>
                    
                </div>
                <div className="col">
                    <SearchContact />
                </div>
            </div>
        </div>
    </nav>
 )
}

export default Navbar;