module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		keyframes: {
		  fadeIn: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		  bounceFadeIn: {
			'0%': { transform: 'translateY(-30px)', opacity: 0 },
			'50%': { transform: 'translateY(-10)', opacity: 1 },
			'75%': { transform: 'translateY(-5px)' },
			'100%': { transform: 'translateY(0)' },
		  },
		},
		animation: {
		  fadeIn: 'fadeIn 1s ease-in-out',
		  bounceFadeIn: 'bounceFadeIn 0.5s ease-out',
		},
	  },
	  backgroundImage: {
		'gradient': 'linear-gradient(to bottom, #1E1E20, #0E0E11)',
	  },
	},
	plugins: [],
	variants: {
	  extend: {},
	},
	layers: {
	  animate: 'animate',
	},
  };
  
