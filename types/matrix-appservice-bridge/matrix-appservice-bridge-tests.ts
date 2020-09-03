/**
 * Generate from https://github.com/wechaty/matrix-appservice-wechaty/blob/master/src/cli/create-cli.ts
 */
import {
  Cli, Bridge,
} from 'matrix-appservice-bridge';

const port             = 8788;
const registrationPath = 'file.yaml';
const schema           = 'schema.json';

const bridgeConfig = {
    schema,
};

const generateRegistration = (...args: any[]) => {
    return args;
};

const run =  (...args: any[]) => {
    return args;
};

const cli = new Cli({
    bridgeConfig,
    generateRegistration,
    port,
    registrationPath,
    run,
});

const bridge = new Bridge({
    homeserverUrl: "xxx",
    domain: "xxx",
    controller: {
        onEvent: async (req, ctx) => { }
    },
    registration: "xxx"
});

cli.run();
