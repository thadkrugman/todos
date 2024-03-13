/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'gruv-bg': '#282828',
				'gruv-blue': '#458588',
				'gruv-purple': '#b16286',
				'gruv-aqua': '#689d6a',
				'gruv-gray-light': '#a3a3a3',
				'gruv-gray-medium': '#737373',
				'gruv-gray-dark': '#525252',
			},
		},
	},
	plugins: [],
};
