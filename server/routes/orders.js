import express from 'express';
import { createOrder, getRestaurantOrders, updateOrderStatus } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create order
router.post('/', createOrder);

// Get restaurant orders (protected)
router.get('/restaurant', auth, getRestaurantOrders);

// Update order status (protected)
router.patch('/:id/status', auth, updateOrderStatus);

export default router;
