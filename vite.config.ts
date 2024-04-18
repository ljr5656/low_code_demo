import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@core': resolve(__dirname, 'src', 'core'),
			'@components': resolve(__dirname, 'src', 'components'),
		},
		extensions: ['.js', '.json', '.ts', '.jsx', '.tsx'],
	},
});
