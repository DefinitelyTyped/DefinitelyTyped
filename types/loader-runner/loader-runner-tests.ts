import { runLoaders, getContext } from 'loader-runner';

const option = {
    resource: 'test.js',
    loaders: [{
        request: 'test.js'
    }],
    context: './lib/',
    readResource: function () {
    }
};

runLoaders(option, function (err, result) {
    if (err) {
        console.log(err, result);
    }
});

getContext('sdlfkjaldfjiojsdf');
