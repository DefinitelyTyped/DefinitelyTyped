import {
    createFiles,
    createFile,
    listPackages,
    addPackage
} from '@lambda-lambda-lambda/cli';

const basePath = './workspace';
const outPath = 'path/to/output';

const appConfig = {
    name: 'restfulApiHandler',
    description: 'This is my awesome serverless application.',
    prefix: '/api',
    asynchronous: 'Yes',
    timeout: '15',
    sdkVersion: '3',
    runtime: 'nodejs20.x'
}

// $ExpectType Promise<void>
createFiles(appConfig, outPath);

// @ts-expect-error
createFiles(appConfig, null);

// @ts-expect-error
createFiles({}, outPath);

// $ExpectType Promise<void>
createFile(appConfig.name, outPath, basePath);

// @ts-expect-error
createFile(appConfig.name, null, basePath);

// @ts-expect-error
createFile(appConfig.name, outPath, null);

// @ts-expect-error
createFile(null, outPath, basePath);

// $ExpectType Promise<PluginInfo[]>
listPackages();

// $ExpectType Promise<string|undefined>
addPackage('AccessControlHeaders');

// @ts-expect-error
addPackage(null);
