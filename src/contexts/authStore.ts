import { create } from 'zustand';
import type { User, AuthState } from '../types';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: localStorage.getItem('authToken'),
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Demo credentials for testing
      if (email === 'demo@example.com' && password === 'password123') {
        const mockUser: User = {
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User',
          avatar: 'https://via.placeholder.com/150',
          createdAt: new Date().toISOString(),
        };
        const mockToken = 'demo-token-' + Date.now();
        
        localStorage.setItem('authToken', mockToken);
        set({
          user: mockUser,
          token: mockToken,
          isLoading: false,
        });
        return;
      }

      // For real API integration, uncomment this and replace with your backend URL
      // const response = await fetch(import.meta.env.VITE_API_URL + '/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      //
      // if (!response.ok) {
      //   throw new Error('Login failed');
      // }
      //
      // const data = await response.json();
      // localStorage.setItem('authToken', data.token);
      // set({
      //   user: data.user,
      //   token: data.token,
      //   isLoading: false,
      // });

      throw new Error('Invalid credentials. Use demo@example.com / password123');
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Login failed',
        isLoading: false,
      });
    }
  },

  signup: async (name: string, email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // For demo, create a mock user
      if (name && email && password.length >= 8) {
        const mockUser: User = {
          id: Date.now().toString(),
          email,
          name,
          avatar: 'https://via.placeholder.com/150',
          createdAt: new Date().toISOString(),
        };
        const mockToken = 'demo-token-' + Date.now();
        
        localStorage.setItem('authToken', mockToken);
        set({
          user: mockUser,
          token: mockToken,
          isLoading: false,
        });
        return;
      }

      throw new Error('Please provide all fields and password must be at least 8 characters');
      
      // For real API integration, uncomment this and replace with your backend URL
      // const response = await fetch(import.meta.env.VITE_API_URL + '/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, password }),
      // });
      //
      // if (!response.ok) {
      //   throw new Error('Signup failed');
      // }
      //
      // const data = await response.json();
      // localStorage.setItem('authToken', data.token);
      // set({
      //   user: data.user,
      //   token: data.token,
      //   isLoading: false,
      // });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Signup failed',
        isLoading: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    set({
      user: null,
      token: null,
      error: null,
    });
  },

  setUser: (user: User | null) => {
    set({ user });
  },

  setToken: (token: string | null) => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
    set({ token });
  },

  clearError: () => {
    set({ error: null });
  },
}));
