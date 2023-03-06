import OMT = require('@surma/rollup-plugin-off-main-thread');
import { Plugin } from 'rollup';

let plugin: Plugin = OMT();

plugin = OMT({
    loader: 'self.<%- amdFunctionName %>',
    useEval: true,
    amdFunctionName: 'define',
    prependLoader: (chunk, workerFiles) => chunk.isEntry || workerFiles.indexOf(chunk.facadeModuleId as string) > -1,
    urlLoaderScheme: 'omt',
    silenceESMWorkerWarning: true,
});
