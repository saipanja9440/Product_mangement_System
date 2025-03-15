import React from 'react';
import mockData from '../../mockData';

function OrdersCalendarView() {
  const ordersByDate = mockData.orders.reduce((acc, order) => {
    if (!acc[order.deliveryDate]) {
      acc[order.deliveryDate] = [];
    }
    acc[order.deliveryDate].push(order);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Orders Calendar View</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(ordersByDate).map(date => (
          <div key={date} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{date}</h3>
            <ul>
              {ordersByDate[date].map(order => (
                <li key={order.id} className="mb-2">
                  <p className="text-sm">
                    Order ID: {order.id} - Customer: {order.customerName} - Status: {order.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersCalendarView;
