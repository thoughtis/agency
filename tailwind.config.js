module.exports = {
	content: [
    	'./dist/index.html'
	],
	theme: {
		extend: {
			keyframes: {
				globe: {
					'from': { transform: 'rotate3d(0,1,0,0deg)' },
					'to': { transform: 'rotate3d(0,1,0,180deg)' }
				}
			},
			animation: {
				globe: 'globe 8s ease-out infinite',
			},
			fontFamily: {
				serif: 'Editorial New, Times, serif',
				sans: 'Tomato Grotesk, Helvetica, Arial, sans-serif'
			},
			fontSize: {
				xs: [
					'clamp( 0.75rem, calc((0.9375rem + 0.3125vw) * 0.75), 0.9375rem)',
					'1.5'
				],
				sm: [
					'clamp( 0.875rem, calc((0.9375rem + 0.3125vw) * 0.875), 1.09375rem)',
					'1.5'
				],
				base: [
					'clamp( 1rem, calc(0.9375rem + 0.3125vw), 1.25rem)',
					'1.5'
				],
				lg: [
					'clamp( 1rem, calc(0.75rem + 1.25vw), 2rem)',
					'1.5'
				],
				// xl: [],
				'2xl': [
					'clamp( 2.6667rem, calc((0.9375rem + 0.3125vw) * 2.6667), 3.33334rem )',
					'1.1875'
				],
				'3xl': [
					'clamp( 3.75rem, calc((0.9375rem + 0.3125vw) * 3.75), 4.6875rem )',
					'1.1875'
				]
			},
			maxWidth: {
				'28': '28ch',
				'42': '42ch'
			}
		}	
	},
	plugins: []
};
