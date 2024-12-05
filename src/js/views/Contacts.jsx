import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";

const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)

    return (

        <div className="container">
      {/* Header da seção de contatos */}
      <div className="contact-header mb-4">
        <h2>My Contacts</h2>
        <Link to="/addContact" className="btn btn-primary">Add new contact</Link>
      </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <CardContact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default Contacts;