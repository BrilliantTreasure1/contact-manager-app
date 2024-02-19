import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { getContact, getGroups } from "../../services/contactService";

import { CurrentLine, Cyan, Purple } from "../../helpers/color";

const ViewContact = () => {
  const { contactId } = useParams();

  const [state, setState] = useState({
    contact: {},
    group: {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state});
        const { data: contactData } = await getContact(contactId);
        const { data: groupData } = await getGroups(contactData.group);

        setState({
          ...state,
          contact: contactData,
          group: groupData,
        });
      } catch (err) {
        console.log(err.message);
        setState({ ...state});
      }
    };

    fetchData();
  }, []);

  const { contact, group } = state;

  return (
    <>
      <section className="view-contact-intro p3">
        <div className="container">
          <div className="row my-2 text-center">
            <p className="h3 fw-bold" style={{ color: Cyan }}>
              Information
            </p>
          </div>
        </div>
      </section>

      <hr style={{ backgroundColor: Cyan }} />


          {Object.keys(contact).length > 0 && (
            <section className="view-contact mt-e">
              <div
                className="container p-2"
                style={{ borderRadius: "1em", backgroundColor: CurrentLine }}
              >
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={contact.photo}
                      alt=""
                      className="img-fluid rounded"
                      style={{ border: `1px solid ${Purple}` }}
                    />
                  </div>
                  <div className="col-md-9">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-dark">
                         FullName   :{" "}
                        <span className="fw-bold">{contact.fullname}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                         Phone :{" "}
                        <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        email : <span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        job : <span className="fw-bold">{contact.job}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        category : <span className="fw-bold">{group.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row my-2">
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <Link
                      to={"/contacts"}
                      className="btn"
                      style={{ backgroundColor: Purple }}
                    >
                     <b>Home Page</b> 
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
    </>
  );
};

export default ViewContact;
