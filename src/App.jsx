import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link to="/" className="text-2xl font-bold text-Black-400">Enterprise Resource
Planning☺️</Link>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-blue-500">Dashboard</Link>
              <Link to="/products" className="hover:text-blue-500">Products</Link>
              <Link to="/orders" className="hover:text-blue-500">Orders</Link>
              <Link to="/calendar" className="hover:text-blue-500">Orders Calendar</Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsManagement />} />
          <Route path="/orders" element={<OrdersManagement />} />
          <Route path="/calendar" element={<OrdersCalendarView />} />
        </Routes>
      </div>
      <div className='mt-[400]'>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
