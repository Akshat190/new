import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderPage from './pages/OrderPage';
import OrderConfirmation from './pages/OrderConfirmation';
import Dashboard from './pages/Dashboard';
import { MenuItem } from './types';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState<Array<{ item: MenuItem; quantity: number }>>([]);

  const addToOrder = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.item.id === item.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCart(prev => prev.filter(item => item.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/menu" 
            element={<Menu cart={cart} addToOrder={addToOrder} />} 
          />
          <Route
            path="/order"
            element={
              <OrderPage
                cart={cart}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
