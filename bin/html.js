/**
 * HTML
 * 
 * @link https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromisescpsrc-dest-options
 */

const { cp } = require( 'fs/promises' );
const { resolve } = require( 'path' );

const src = resolve( process.cwd(), './src/index.html' );
const dist = resolve( process.cwd(), './dist/index.html' );

/**
 * Build
 */
async function buildHTML() {
	return await cp( src, dist );
}

module.exports = {
	src,
	buildHTML
};
 