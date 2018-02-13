
import sanitize = require('sanitize-filename');

// Some string that may be unsafe as a filesystem filename
var UNSAFE_FILENAME = "h*ello:/world?\u0000";

// Sanitize the unsafe filename to be safe for use as a filename
var filename: string;

filename = sanitize(UNSAFE_FILENAME);
filename = sanitize(UNSAFE_FILENAME, { replacement: '--' });
