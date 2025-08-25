const express = require('express');
const router = express.Router();
const {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
} = require('../controllers/contactController');

// Route for getting all contacts and creating a new one
router.route('/').get(getContacts).post(createContact);

// Route for updating and deleting a specific contact by ID
router.route('/:id').put(updateContact).delete(deleteContact);

module.exports = router;