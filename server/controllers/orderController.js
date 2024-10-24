import Order from '../models/Order.js';

// Create order
export const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get restaurant orders
export const getRestaurantOrders = async (req, res) => {
  try {
    const orders = await Order.find({ restaurant: req.user.userId })
      .populate('items.menuItem')
      .sort('-createdAt');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id, restaurant: req.user.userId },
      { status: req.body.status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};