export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'main' | 'desserts';
  image: string;
  estimatedTime: number;
}

export interface Order {
  id: string;
  items: Array<{
    menuItem: MenuItem;
    quantity: number;
  }>;
  tableNumber: number;
  status: 'pending' | 'preparing' | 'ready' | 'served';
  totalAmount: number;
  timestamp: Date;
}