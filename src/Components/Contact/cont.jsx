import {CurrentLine , Purple , Orange , Cyan , Red} from "../../helpers/color"

const cont = () => {
    return(
        <div className="col-md-6">
        <div style={{backgroundColor: CurrentLine }} className="card my-2">
            <div className="card-body">
                <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4 col-sm-4">
                        <img src="https://via.placeholder.com/200"
                         style={{border: `1px solid ${Purple}`}} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-7 col-sm-7">
                        <ul className="list-group">
                            <li className="list-group-item">
                                FullName : {" "}
                                <span className="fw-bold">
                                    Abolfazl GanjTabesh
                                </span>
                            </li>
        
                            <li className="list-group-item">
                                FullName : {" "}
                                <span className="fw-bold">
                                    Abolfazl GanjTabesh
                                </span>
                            </li>
        
                            <li className="list-group-item">
                                FullName : {" "}
                                <span className="fw-bold">
                                    Abolfazl GanjTabesh
                                </span>
                            </li>
        
                        </ul>
                    </div>
                    <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button
                className="btn my-1"
                style={{ backgroundColor: Orange }}
              >
                <i className="fa fa-eye" />
              </button>
        
              <button
                className="btn my-1"
                style={{ backgroundColor: Cyan }}
              >
                <i class="fa-solid fa-pen-line"></i>
              </button>
              <button
                className="btn my-1"
                style={{ backgroundColor: Red }}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
        
                </div>
            </div>
        </div>
        </div>
    ) 
}

export default cont;