const mockData = {  
    products: [  
      { id: 1, name: 'Product 1', category: 'Category 1', price: 100, stock: 10 },  
      { id: 2, name: 'Product 2', category: 'Category 2', price: 200, stock: 20 },  
      { id: 3, name: 'Product 3', category: 'Category 3', price: 300, stock: 30 },  
      // Add more products as needed  
    ],  
    orders: [  
      { id: 1, customerName: 'Customer 1', orderDate: '2023-10-01', status: 'Pending', deliveryDate: '2023-10-05' },  
      { id: 2, customerName: 'Customer 2', orderDate: '2023-10-02', status: 'Shipped', deliveryDate: '2023-10-06' },  
      { id: 3, customerName: 'Customer 3', orderDate: '2023-10-02', status: 'Canceled', deliveryDate: '2023-10-06' },  
      // Add more orders as needed  
    ]  
  };  
    
  export default mockData;  
  