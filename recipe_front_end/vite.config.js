import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [
        { dir: 'src', baseRoute: '' },
        { dir: 'src/pages', baseRoute: 'pages' },

      ],
    }),
    Layouts(),
    Components(),
  ]
})
