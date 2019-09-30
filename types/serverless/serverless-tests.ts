import Serverless from 'serverless';
import Plugin from 'serverless/classes/Plugin';

const options: Serverless.Options = {
    noDeploy: false,
    stage: null,
    region: '',
};

const serverless = new Serverless();

class CustomPlugin implements Plugin {
    commands = {
        command: {
            usage: 'description',
            lifecycleEvents: ['start'],
            options: {
                option: {
                    usage: `description`,
                    required: true,
                    shortcut: 'o',
                },
            },
        },
    };

    customProp = {};

    hooks: Plugin.Hooks;

    constructor(serverless: Serverless, options: Serverless.Options) {
        this.hooks = {
            'command:start': () => {},
        };
    }
}
