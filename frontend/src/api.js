// src/api.js
import axios from "axios";

// Define base URL (environment variable or localhost for dev)
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Create reusable Axios instance
const api = axios.create({
  baseURL: API_URL, // e.g. https://lostfoundapp-backend.onrender.com
  headers: { "Content-Type": "application/json" },
});

// API Endpoints
export const getItems = () => api.get("/api/items");
export const addItem = (itemData) => api.post("/api/items", itemData);
export const login = (credentials) => api.post("/api/auth/login", credentials);
export const signup = (userData) => api.post("/api/auth/signup", userData);

export default api;
