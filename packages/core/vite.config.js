import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'VuePatternfly4',
      fileName: format => `core.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: 'core.[ext]',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});