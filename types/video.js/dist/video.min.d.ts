/**
 * This provides `video.min.js` alternative distribution typings :
 * - `import videojs from 'video.js/dist/video.min.js';`
 * - `import('video.js/dist/video.min.js').then((videoJSBundle) => {})`
 */
import videojs from '../index';
export default videojs;
export as namespace videojs;
