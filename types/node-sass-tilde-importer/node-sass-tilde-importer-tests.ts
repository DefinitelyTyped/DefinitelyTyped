import sass = require('node-sass');
import nodeSassTildeImporter = require('node-sass-tilde-importer');

nodeSassTildeImporter('~my-module', '');
nodeSassTildeImporter('~my-module', '', data => {
    data; // $ExpectType ImporterReturnType
});

// usage
sass.render({ file: '/file/path', importer: nodeSassTildeImporter }, () => {});
sass.render({ file: '/file/path', importer: [nodeSassTildeImporter] }, () => {});
sass.renderSync({ file: '/file/path', importer: nodeSassTildeImporter });
sass.renderSync({ file: '/file/path', importer: [nodeSassTildeImporter] });
