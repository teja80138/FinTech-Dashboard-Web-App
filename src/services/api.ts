import axios from 'axios';
import type { StockData, Portfolio, Transaction, WatchlistItem } from '../types';

const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'https://api.example.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Stock API endpoints
export const stockService = {
  getStocks: async (limit: number = 10) => {
    const { data } = await apiClient.get<StockData[]>('/stocks', {
      params: { limit },
    });
    return data;
  },

  getStock: async (symbol: string) => {
    const { data } = await apiClient.get<StockData>(`/stocks/${symbol}`);
    return data;
  },

  searchStocks: async (query: string) => {
    const { data } = await apiClient.get<StockData[]>('/stocks/search', {
      params: { q: query },
    });
    return data;
  },

  getStockHistory: async (symbol: string, days: number = 30) => {
    const { data } = await apiClient.get(`/stocks/${symbol}/history`, {
      params: { days },
    });
    return data;
  },
};

// Portfolio API endpoints
export const portfolioService = {
  getPortfolio: async () => {
    const { data } = await apiClient.get<Portfolio>('/portfolio');
    return data;
  },

  addStock: async (symbol: string, shares: number, avgCost: number) => {
    const { data } = await apiClient.post<Portfolio>('/portfolio/add', {
      symbol,
      shares,
      avgCost,
    });
    return data;
  },

  removeStock: async (stockId: string) => {
    const { data } = await apiClient.delete<Portfolio>(
      `/portfolio/stocks/${stockId}`
    );
    return data;
  },

  updateStock: async (
    stockId: string,
    shares: number,
    avgCost: number
  ) => {
    const { data } = await apiClient.put<Portfolio>(
      `/portfolio/stocks/${stockId}`,
      { shares, avgCost }
    );
    return data;
  },
};

// Transaction API endpoints
export const transactionService = {
  getTransactions: async (limit: number = 50, offset: number = 0) => {
    const { data } = await apiClient.get<Transaction[]>('/transactions', {
      params: { limit, offset },
    });
    return data;
  },

  createTransaction: async (
    type: 'buy' | 'sell',
    symbol: string,
    shares: number,
    price: number
  ) => {
    const { data } = await apiClient.post<Transaction>('/transactions', {
      type,
      symbol,
      shares,
      price,
    });
    return data;
  },

  getTransaction: async (id: string) => {
    const { data } = await apiClient.get<Transaction>(`/transactions/${id}`);
    return data;
  },
};

// Watchlist API endpoints
export const watchlistService = {
  getWatchlist: async () => {
    const { data } = await apiClient.get<WatchlistItem[]>('/watchlist');
    return data;
  },

  addToWatchlist: async (symbol: string) => {
    const { data } = await apiClient.post<WatchlistItem>('/watchlist', {
      symbol,
    });
    return data;
  },

  removeFromWatchlist: async (itemId: string) => {
    const { data } = await apiClient.delete<WatchlistItem>(
      `/watchlist/${itemId}`
    );
    return data;
  },
};

export default apiClient;
