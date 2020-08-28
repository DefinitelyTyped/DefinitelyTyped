import WorkerPlugin = require('worker-plugin');
import webpack = require('webpack');

new WorkerPlugin();

class ExistingPlugin extends webpack.Plugin {}

const optionsArray: WorkerPlugin.Options[] = [
    {
        globalObject: false,
    },
    {
        globalObject: 'self',
    },
    {
        plugins: [
          'SomeExistingPlugin',
          new ExistingPlugin(),
        ],
    },
    {
        preserveTypeModule: true,
        workerType: 'module'
    },
    {
        worker: true,
        sharedWorker: true
    }
];

const plugins = optionsArray.map(options => new WorkerPlugin(options));
