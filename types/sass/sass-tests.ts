import * as sass from 'sass';

sass.renderSync({
    file: 'index.scss',
    sourceMap: true,
    outFile: 'index.css',
});
