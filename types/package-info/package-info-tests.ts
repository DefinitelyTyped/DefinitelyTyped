import info = require('package-info');

info('package-info').then(data => {
    data.author; // $ExpectType string
    data.description; // $ExpectType string
    data.homepage; // $ExpectType string
    data.license; // $ExpectType string
    data.name; // $ExpectType string
    data.version; // $ExpectType string
});
