/**
 * Watch
 * 
 * @link https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromiseswatchfilename-options
 */

const { watch } = require( 'fs/promises' );
const { src, buildHTML } = require( './html' );

const { signal } = new AbortController();

(async () => {
	try {
		const watcher = watch( src, { signal });
		for await (const event of watcher) {
			console.log( `Updated ${event.filename}` );
			await buildHTML();
		}
	} catch (err) {
		if (err.name === 'AbortError')
			return;
		throw err;
	}
})();
