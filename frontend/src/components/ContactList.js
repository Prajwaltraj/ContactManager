import React from 'react';

const ContactList = ({ contacts, onEdit, onDelete }) => {
    return (
        <div className="contact-list">
            <h2>Contact List</h2>
            {contacts.length === 0 ? (
                <p>No contacts found. Please add a new one.</p>
            ) : (
                contacts.map(contact => (
                    <div key={contact._id} className="contact-item">
                        <div className="contact-details">
                            <h3>{contact.name}</h3>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                        </div>
                        <div className="contact-actions">
                            <button onClick={() => onEdit(contact)} className="btn-edit">
                                Edit
                            </button>
                            <button onClick={() => onDelete(contact._id)} className="btn-delete">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ContactList;