import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Curriculum_Digital_Obed_Olavarria/', // Ajusta el nombre del repositorio si es necesario
  build: {
    outDir: 'dist', // Directorio de salida de la compilación
  },
  resolve: {
    alias: {
      '@': '/src',  // Esto asegura que la ruta "@/assets" sea resuelta correctamente
    },
  },
});
