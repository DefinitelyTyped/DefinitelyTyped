import { runLoaders, getContext, Loader, RunLoaderOption } from 'loader-runner';

const option = {} as RunLoaderOption;

runLoaders(option, function (err, result) {
    if(err)
        console.log(err, result);
});

getContext('sdlfkjaldfjiojsdf');
