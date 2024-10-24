import MenuItem from '../models/MenuItem.js';

// Get menu items for a restaurant
export const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ restaurant: req.params.restaurantId });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add menu item
export const addMenuItem = async (req, res) => {
  try {
    const menuItem = new MenuItem({ ...req.body, restaurant: req.user.userId });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update menu item
export const updateMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findOneAndUpdate(
      { _id: req.params.id, restaurant: req.user.userId },
      req.body,
      { new: true }
    );
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete menu item
export const deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findOneAndDelete({
      _id: req.params.id,
      restaurant: req.user.userId
    });
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};