import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='container mx-auto mt-6 px-4'>
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
        <h1 className="text-4xl font-extrabold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105">
            <p className="text-lg font-semibold text-gray-700">Total Products</p>
            <p className="text-3xl font-bold text-blue-600">10</p>
            <Link to="/products" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow">Manage Products</Link>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105">
            <p className="text-lg font-semibold text-gray-700">Total Orders</p>
            <p className="text-3xl font-bold text-blue-600">5</p>
            <Link to="/orders" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow">Manage Orders</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
