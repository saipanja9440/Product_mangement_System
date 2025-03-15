import React, { useState } from 'react';
import mockData from '../../mockData';

function ProductsManagement() {
  const [products, setProducts] = useState(mockData.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: formData.price,
      stock: formData.stock,
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', category: '', price: '', stock: '' });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setEditingProduct(product.id);
    setFormData(product);
  };

  const updateProduct = () => {
    setProducts(
      products.map((product) =>
        product.id === editingProduct ? { ...formData, id: editingProduct } : product
      )
    );
    setEditingProduct(null);
    setFormData({ name: '', category: '', price: '', stock: '' });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Products Management</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editingProduct ? updateProduct() : addProduct();
        }}
        className="mb-4"
      >
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required className="border p-2 mr-2 hover:border-gray-500 hover:rounded-lg" />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Enter Category" required className="border p-2 mr-2  hover:border-gray-500 hover:rounded-lg" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter Price" required className="border p-2 mr-2  hover:border-gray-500 hover:rounded-lg" />
        <input type="text" name="stock" value={formData.stock} onChange={handleChange} placeholder="Enter Stock" required className="border p-2 mr-2  hover:border-gray-500 hover:rounded-lg" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 border">
            <p className='font-bold'>{product.name}</p>
            <p className="font-semibold">Category: {product.category}</p>
            <p className="font-semibold">Price: {product.price}</p>
            <p className="font-semibold">Stock: {product.stock}</p>
            <button onClick={() => editProduct(product)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mt-2 mr-2">
              Edit
            </button>
            <button onClick={() => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mt-2">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsManagement;
