import express from 'express';
import { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } from '../controllers/menuController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:restaurantId', getMenuItems);
router.post('/', auth, addMenuItem);
router.put('/:id', auth, updateMenuItem);
router.delete('/:id', auth, deleteMenuItem);

export default router;
