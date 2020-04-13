import GulpZip = require('gulp-zip');

GulpZip('file.zip').on('end', () => {});
GulpZip('file.zip', {}).on('end', () => {});
GulpZip('file.zip', {compress: false}).on('end', () => {});
GulpZip('file.zip', { modifiedTime: new Date(0) }).on('end', () => {});
