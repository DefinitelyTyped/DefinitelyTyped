/// <reference path="./index.d.ts" />

import { runLoaders, getContext, Loader, RunLoaderOption } from 'loader-runner';

const option = {} as RunLoaderOption;

runLoaders(option, function (err, result) {
    console.log(err, result);
});

getContext('sdlfkjaldfjiojsdf');
