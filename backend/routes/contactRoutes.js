const express = require('express');
const router = express.Router();
const { submitContact, getAllContacts } = require('../controllers/contactController');
const validateContact = require('../middleware/validateContact');

/**
 * Contact Form Routes
 * Base path: /api/contact
 */

// POST /api/contact — Submit a new contact form
router.post('/', validateContact, submitContact);

// GET /api/contact — Retrieve all contact submissions (Admin)
router.get('/', getAllContacts);

module.exports = router;
