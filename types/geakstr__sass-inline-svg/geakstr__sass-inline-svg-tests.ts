import inliner = require('@geakstr/sass-inline-svg');

inliner('my-path', {
    optimize: true,
    encodingFormat: 'uri',
});

inliner('my-path', {
    encodingFormat: 'base64',
});
