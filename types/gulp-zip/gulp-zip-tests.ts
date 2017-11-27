import * as GulpZip from 'gulp-zip';

GulpZip('file.zip').on('end', () => {});
GulpZip('file.zip', {compress: false}).on('end', () => {});
