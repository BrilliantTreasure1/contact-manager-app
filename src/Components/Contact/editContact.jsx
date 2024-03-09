import { useEffect, useState ,useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast,{ Toaster } from "react-hot-toast";

import { contactContext } from "../../context/contactContext";

import {
  getContact,
  getAllgroups,
  updateContact,
} from "../../services/contactService";

import {Comment , Orange , Purple } from "../../helpers/color";

const EditContact = () => {
  const { contactId } = useParams();
  const { groups ,contacts , setfilteredContacts} = useContext(contactContext)

  const navigate = useNavigate();

  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: contactData } = await getContact(contactId);
        const { data: groupsData } = await getAllgroups();
        
        setContact(contactData)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const setContactInfo = (event) => {
    setContact({
        ...contact,
        [event.target.name]: event.target.value,
    });

  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const { data , status } = await updateContact(contact, contactId);
      if (status === 200) {
        navigate("/contacts")
        toast.success("مخاطب با موفقیت ویرایش شد",{icon:"💥"})

        const allContacts = [...contacts];
        const contactIndex = [allContacts.findIndex(
            (c) => c.id === parseInt(...data)
        )]
        allContacts[contactIndex] = {...data}

        setContact(allContacts);
        
        setfilteredContacts(allContacts);
        

        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
        <>
          <section className="p-3">
            <div className="container">
              <div className="row my-2">
                <div className="col text-center">
                  <p className="h4 fw-bold" style={{ color: Orange }}>
                    ویرایش مخاطب
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: Orange }} />
              <div
                className="row p-2 w-75 mx-auto align-items-center"
                style={{ backgroundColor: "#44475a", borderRadius: "1em" }}
              >
                <div className="col-md-8">
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input
                        name="fullname"
                        type="text"
                        className="form-control"
                        value={contact.fullname}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="نام و نام خانوادگی"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        value={contact.photo}
                        onChange={setContactInfo}
                        className="form-control"
                        required={true}
                        placeholder="آدرس تصویر"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="mobile"
                        type="number"
                        className="form-control"
                        value={contact.mobile}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="شماره موبایل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        value={contact.email}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="آدرس ایمیل"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="job"
                        type="text"
                        className="form-control"
                        value={contact.job}
                        onChange={setContactInfo}
                        required={true}
                        placeholder="شغل"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="group"
                        value={contact.group}
                        onChange={setContactInfo}
                        required={true}
                        className="form-control"
                      >
                        <option value="">انتخاب گروه</option>
                        {groups.length > 0 &&
                          groups.map((group) => (
                            <option key={group.id} value={group.id}>
                              {group.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: Purple }}
                        value="ویرایش مخاطب"
                      />
                      <Link
                        to={"/contacts"}
                        className="btn mx-2"
                        style={{ backgroundColor: Comment }}
                      >
                        انصراف
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <img
                    src={contact.photo}
                    className="img-fluid rounded"
                    style={{ border: `1px solid ${Purple}` }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-1">
              <img
                src={require("../../assets/man-taking-note.png")}
                height="300px"
                style={{ opacity: "60%" }}
              />
            </div>
          </section>
        </>
      )}


export default EditContact;
