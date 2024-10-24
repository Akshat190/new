import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('restaurantName').notEmpty().withMessage('Restaurant name is required'),
];

export const validateOrder = [
  body('items').isArray().withMessage('Items must be an array'),
  body('tableNumber').isNumeric().withMessage('Table number must be a number'),
  body('totalAmount').isNumeric().withMessage('Total amount must be a number'),
];

export const validateMenuItem = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('category').isIn(['starters', 'main', 'desserts']).withMessage('Invalid category'),
  body('image').notEmpty().withMessage('Image URL is required'),
  body('estimatedTime').isNumeric().withMessage('Estimated time must be a number'),
];

