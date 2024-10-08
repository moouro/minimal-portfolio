import presetQuick from "franken-ui/shadcn-ui/preset-quick";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [presetQuick({  darkMode: 'class'})],
	theme: {
		extend: {
			aria: {
				current: 'current=page',
			}
		},
	},
	plugins: [

		
	],
}
