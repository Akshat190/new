import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Crispy Calamari',
    description: 'Tender calamari rings, lightly breaded and fried to perfection, served with zesty marinara sauce',
    price: 12.99,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80',
    estimatedTime: 12
  },
  {
    id: '2',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon fillet, grilled with herbs and lemon, served with seasonal vegetables',
    price: 24.99,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80',
    estimatedTime: 25
  },
  {
    id: '3',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: 8.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    estimatedTime: 5
  }
];