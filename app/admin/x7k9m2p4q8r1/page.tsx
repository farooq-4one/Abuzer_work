"use client";
import React, { useEffect, useState } from "react";

interface Order {
  id: number;
  name: string;
  phone: string;
  email: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  bank: string;
  companyName: string;
  payrollOption: string;
  depositDate: string;
  depositAmount: string;
  endingBalance: string;
  accountNumber: string | null;
  howMany: string;
  paymentOption: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/orders");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch orders");
      }

      setOrders(data.data || []);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching orders:", err);
      setError(err.message || "Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phone.includes(searchTerm) ||
      order.companyName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-blue-200 mt-1">Order Management System</p>
            </div>
            <div className="text-right">
              <p className="text-blue-200">Total Orders</p>
              <p className="text-3xl font-bold">{orders.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Refresh */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by name, email, phone, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <button
            onClick={fetchOrders}
            className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
          >
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Orders Table */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500 text-lg">
              {searchTerm ? "No orders found matching your search." : "No orders yet."}
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bank Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">{order.name}</div>
                          <div className="text-gray-500">{order.email}</div>
                          <div className="text-gray-500">{order.phone}</div>
                          <div className="text-gray-500 text-xs mt-1">
                            {order.city}, {order.state} {order.zip}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.companyName}</div>
                        <div className="text-sm text-gray-500">{order.payrollOption}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="text-gray-900">{order.bank}</div>
                          <div className="text-gray-500 text-xs mt-1">
                            Deposit: {order.depositAmount}
                          </div>
                          <div className="text-gray-500 text-xs">
                            Balance: {order.endingBalance}
                          </div>
                          {order.accountNumber && (
                            <div className="text-gray-500 text-xs">
                              Account: {order.accountNumber}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          <div className="text-gray-900">{order.howMany}</div>
                          <div className="text-gray-500">{order.paymentOption}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-blue-900 hover:text-blue-700 font-medium"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Order Details */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Order Details #{selectedOrder.id}</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-white hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg border-b pb-2">
                    Customer Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Name:</span> {selectedOrder.name}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> {selectedOrder.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> {selectedOrder.phone}
                    </p>
                    <p>
                      <span className="font-medium">Address:</span> {selectedOrder.address}
                    </p>
                    <p>
                      <span className="font-medium">City:</span> {selectedOrder.city}
                    </p>
                    <p>
                      <span className="font-medium">State:</span> {selectedOrder.state}
                    </p>
                    <p>
                      <span className="font-medium">Zip:</span> {selectedOrder.zip}
                    </p>
                    <p>
                      <span className="font-medium">Country:</span> {selectedOrder.country}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg border-b pb-2">
                    Bank & Company Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Bank:</span> {selectedOrder.bank}
                    </p>
                    <p>
                      <span className="font-medium">Company Name:</span>{" "}
                      {selectedOrder.companyName}
                    </p>
                    <p>
                      <span className="font-medium">Payroll Option:</span>{" "}
                      {selectedOrder.payrollOption}
                    </p>
                    <p>
                      <span className="font-medium">Deposit Date:</span>{" "}
                      {selectedOrder.depositDate}
                    </p>
                    <p>
                      <span className="font-medium">Deposit Amount:</span>{" "}
                      {selectedOrder.depositAmount}
                    </p>
                    <p>
                      <span className="font-medium">Ending Balance:</span>{" "}
                      {selectedOrder.endingBalance}
                    </p>
                    {selectedOrder.accountNumber && (
                      <p>
                        <span className="font-medium">Account Number:</span>{" "}
                        {selectedOrder.accountNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg border-b pb-2">
                    Payment Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Package:</span> {selectedOrder.howMany}
                    </p>
                    <p>
                      <span className="font-medium">Payment Method:</span>{" "}
                      {selectedOrder.paymentOption}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg border-b pb-2">
                    Order Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Order ID:</span> #{selectedOrder.id}
                    </p>
                    <p>
                      <span className="font-medium">Created At:</span>{" "}
                      {formatDate(selectedOrder.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
