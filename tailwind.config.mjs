import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

// 200 - primary dark mode
// 600 - the primary color light mode
// 900 - ?
// 950 - ?

const accent = { 200: '#f8b1cc', 600: '#c00074', 900: '#5f0037', 950: '#420a27' };
const gray = { 100: '#F1F1F1', 200: '#E2E2E2', 300: '#F2F2F2', 400: '#151515', 500: '#151515', 700: '#707070', 800: '#111111', 900: '#171717' };

// 100 - light mode nav 
// 200 - lightmode borders/some bg
// 300 - border
// 400 - dark mode somth
// 500 - ?????
// 700 - most borders
// 900 - page background

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				// accent: colors.rose,
				accent: accent,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				// gray: colors.neutral,
				gray: gray,
			},
		},
	},
	plugins: [starlightPlugin()],
};