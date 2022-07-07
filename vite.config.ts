import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        root: mode === 'development'?'demo': void 0,
        build: {
            lib: {
                entry: './src/quill-divider.ts',
                name: 'quill-divider',
                fileName: 'quill-divider'
            },
            rollupOptions: {
                external: ['quill'],
                output: {
                    globals: {
                        quill: 'Quill'
                    }
                }
            }
        }
    }
})
