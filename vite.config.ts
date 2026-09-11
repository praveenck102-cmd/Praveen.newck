import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          facultyLogin: path.resolve(__dirname, 'faculty-login.html'),
          facultyDashboard: path.resolve(__dirname, 'faculty-dashboard.html'),
          studentLogin: path.resolve(__dirname, 'student-login.html'),
          studentDashboard: path.resolve(__dirname, 'student-dashboard.html'),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
