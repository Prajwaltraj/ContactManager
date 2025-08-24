import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [notification, setNotification] = useState(''); // 1. Add state for the notification

    // Function to show a notification and make it disappear
    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification('');
        }, 3000); // Notification will disappear after 3 seconds
    };

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => console.error("Error fetching contacts:", error));
    }, []);

    const refreshContacts = () => {
        axios.get(API_URL)
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => console.error("Error fetching contacts:", error));
    };

    const handleSave = (contact) => {
        if (contact._id) {
            // Update existing contact
            axios.put(`${API_URL}/${contact._id}`, contact)
                .then(() => {
                    refreshContacts();
                    setSelectedContact(null);
                    showNotification('Contact updated successfully!'); // 2. Show notification on update
                })
                .catch(error => console.error("Error updating contact:", error));
        } else {
            // Create new contact
            axios.post(API_URL, contact)
                .then(() => {
                    refreshContacts();
                    showNotification('Contact added successfully!'); // 3. Show notification on add
                })
                .catch(error => console.error("Error creating contact:", error));
        }
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
    };

    const handleDelete = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() => {
                refreshContacts();
                showNotification('Contact deleted successfully!'); // Optional: Notification on delete
            })
            .catch(error => console.error("Error deleting contact:", error));
    };

    const handleCancel = () => {
        setSelectedContact(null);
    }

    return (
        <div className="App">
            <header>
                <h1>Contact Manager</h1>
            </header>
            <main>
                {/* 4. Conditionally render the notification popup */}
                {notification && <div className="notification">{notification}</div>}
                
                <ContactForm
                    onSave={handleSave}
                    selectedContact={selectedContact}
                    onCancel={handleCancel}
                />
                <ContactList
                    contacts={contacts}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </main>
        </div>
    );
}

export default App;