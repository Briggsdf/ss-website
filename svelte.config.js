import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import vercel from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: vercel()
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        defaults: {
            style: 'postcss',
        },
        postcss: true,
    }),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte'
    }
};

export default config;