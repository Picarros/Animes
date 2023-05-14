import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
            assets: 'docs',
            fallback: 'index.html',
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev ? '' : '/Animes'
        },
        prerender: {
            default: true,
        },
        trailingSlash: 'always',
	}
};

export default config;
