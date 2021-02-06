import * as ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

new ServiceWorkerWebpackPlugin({
    entry: 'foo',
});

new ServiceWorkerWebpackPlugin({
    entry: 'foo',
    filename: 'bar',
    excludes: ['**'],
    includes: ['**'],
    async template(options) {
        console.log(options.assets);
    },
    transformOptions({ assets }) {
        return { assets };
    },
    minimize: true,
});

new ServiceWorkerWebpackPlugin({
    entry: 'foo',
    filename: 'bar',
    excludes: ['**'],
    includes: ['**'],
    async template(options) {
        console.log(options.assets);
    },
    transformOptions({ assets }) {
        return { assets };
    },
    minimize: true,
});

new ServiceWorkerWebpackPlugin<number>({
    entry: 'foo',
    async template(options) {
        console.log(options * options);
    },
    transformOptions() {
        return 42;
    },
});

const serviceworkerPromise = runtime.register();
if (serviceworkerPromise) {
    serviceworkerPromise.then(registration => {
        registration.pushManager;
    });

    serviceworkerPromise.then(registration => {
        registration.pushManager;
    });
} else {
    console.log(serviceworkerPromise === false);
}
