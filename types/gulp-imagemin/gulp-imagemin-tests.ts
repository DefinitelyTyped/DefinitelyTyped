import * as GulpImagemin from 'gulp-imagemin';

GulpImagemin();

GulpImagemin([
    GulpImagemin.gifsicle({ interlaced: true }),
    GulpImagemin.jpegtran({ progressive: true }),
    GulpImagemin.optipng({ optimizationLevel: 5 }),
    GulpImagemin.svgo({
        plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
    })
]);

GulpImagemin({ verbose: true });

GulpImagemin([
    GulpImagemin.svgo({
        plugins: [{ removeViewBox: true }]
    })
], { verbose: true });
