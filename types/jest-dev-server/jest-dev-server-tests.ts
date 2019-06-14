import { setup, getServers, teardown } from 'jest-dev-server';

setup([
    {
        command: 'yarn storybook:ci',
        port: 3002,
        usedPortAction: 'kill',
        launchTimeout: 60000,
    },
    {
        command: 'yarn next:ci',
        port: 3001,
        usedPortAction: 'kill',
        launchTimeout: 60000,
    },
    {
        command: 'yarn dev:docs',
        port: 3000,
        usedPortAction: 'kill',
        launchTimeout: 60000,
    },
]).then(() => {
    // have fun
});

setup({
    command: 'yarn storybook:ci',
    port: 3002,
    usedPortAction: 'kill',
    launchTimeout: 60000,
}).then(() => {
    // One server only
});

getServers();

teardown().then(() => {
    // After teardown has completed
});
