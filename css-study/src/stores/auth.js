import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    role: localStorage.getItem('role') || null,
    username: localStorage.getItem('username') || null
  }),
  actions: {
    setAuthData(token, userId, role, username) {
      this.token = token;
      this.userId = userId;
      this.role = role;
      this.username = username;

      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);
    },

    clearAuth() {
      this.token = null;
      this.userId = null;
      this.role = null;
      this.username = null;

      localStorage.removeItem('token');
      localStorage.removeItem('userId');  
      localStorage.removeItem('role');  
      localStorage.removeItem('username');
    },
  },
});
