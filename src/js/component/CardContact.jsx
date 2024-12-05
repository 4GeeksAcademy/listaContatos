import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const eliminarContacto = () => {
        console.log(contact);
        actions.deleteContact(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-center">
            <div className="d-flex flex-wrap align-items-center w-100">
                <div className="col-md-3 d-flex justify-content-center mb-3 mb-md-0">
                    <img
                        className="rounded-circle"
                        src="https://picsum.photos/170/170/"
                        alt="Contact"
                    />
                </div>
                <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.address}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-1">{contact.email}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-start justify-content-md-end align-items-center">
                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3 edit-contact-btn">
                        <i className="fa fa-pencil-alt"></i> 
                    </Link>

                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={"#delete-contact-" + contact.id}
                        className="delete-contact-btn"
                    >
                        <i className="fa fa-trash-alt"></i>
                    </button>

                    {/* Modal */}
                    <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Do you really want to delete this contact? This action cannot be undone.
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CardContact;
