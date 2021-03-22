import { KapShareService } from 'kap-plugin';

interface Config {
    name: string;
    greeting: string;
    accessToken?: string;
}

const service: KapShareService<Config> = {
    title: 'My Plugin',
    formats: ['apng', 'gif'],
    config: {
        name: {
            type: 'string',
            minLength: 1,
            required: true,
            default: 'Bilbo',
        },
        // $ExpectError
        greeting: { type: 'string', default: true },
    },
    action: async context => {
        // $ExpectType string
        const name = context.config.get('name');

        context.config.get('accessToken');

        context.config.get('unknown');

        await context.request(`https://example.com/greet/${name}`);

        context.notify('Greeted example.com');
    },
};
