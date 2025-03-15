import React, { useState } from 'react';
import mockData from '../../mockData';

function ProductsManagement() {
  const [products, setProducts] = useState(mockData.products);

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: 'New Product', category: 'Category', price: 0, stock: 0 };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Products Management</h1>
      <div className="flex justify-center mb-6">
        <button onClick={addProduct} className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">Add Product</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200">
              <p className="text-xl font-semibold text-gray-700">{product.name}</p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Price: <span className="text-blue-600 font-bold">${product.price}</span></p>
              <p className="text-gray-600">Stock: <span className="text-green-600 font-bold">{product.stock}</span></p>
            </div>
            <div className="p-4 bg-gray-50 flex justify-center border-t">
              <button onClick={() => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsManagement;
