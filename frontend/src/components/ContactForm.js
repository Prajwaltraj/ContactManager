import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSave, selectedContact, onCancel }) => {
    const [contact, setContact] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        if (selectedContact) {
            setContact(selectedContact);
        } else {
            setContact({ name: '', email: '', phone: '' });
        }
    }, [selectedContact]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevContact => ({ ...prevContact, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(contact);
        setContact({ name: '', email: '', phone: '' }); // Reset form after save
    };
    
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <h2>{selectedContact ? 'Edit Contact' : 'Add New Contact'}</h2>
            <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="text"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
            />
            <div className="form-buttons">
                <button type="submit" className="btn-save">
                    {selectedContact ? 'Update' : 'Save'}
                </button>
                {selectedContact && (
                    <button type="button" onClick={onCancel} className="btn-cancel">
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default ContactForm;