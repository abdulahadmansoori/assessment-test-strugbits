import axios from 'axios';
// require('dotenv').config();

const baseURL = 'http://localhost:5000/api/v1';
// const baseURL = process.env.baseURL;

export const fetchData = async () => {
  try {
    const response = await axios.get(`${baseURL}/customers`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const addCustomer = async (customer) => {
  try {
    const response = await axios.post(`${baseURL}/customers`, customer);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add customer');
  }
};

export const updateCustomer = async (customerId, updatedCustomer) => {
  try {
    const response = await axios.put(`${baseURL}/customers/${customerId}`, updatedCustomer);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update customer');
  }
};

export const deleteCustomer = async (customerId) => {
  try {
    await axios.delete(`${baseURL}/customers/${customerId}`);
  } catch (error) {
    throw new Error('Failed to delete customer');
  }
};
