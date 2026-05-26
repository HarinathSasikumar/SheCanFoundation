const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');

/**
 * @desc    Submit a new contact form entry
 * @route   POST /api/contact
 * @access  Public
 */
const submitContact = async (req, res, next) => {
  try {
    // Check for validation errors from middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please check your inputs.',
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }

    const { fullName, email, phone, message } = req.body;

    // Create and save new contact entry in MongoDB
    const newContact = await Contact.create({
      fullName,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: '🎉 Thank you for reaching out! We will get back to you within 24 hours.',
      data: {
        id: newContact._id,
        fullName: newContact.fullName,
        email: newContact.email,
        createdAt: newContact.createdAt,
      },
    });
  } catch (error) {
    // Pass error to the centralized error handler
    next(error);
  }
};

/**
 * @desc    Get all contact submissions (Admin use)
 * @route   GET /api/contact
 * @access  Private (protect with auth middleware in production)
 */
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact, getAllContacts };
