import { WebpackPluginServe } from 'webpack-plugin-serve';

interface Configuration {
    entry: string[];
    watch?: boolean;
    plugins?: object[];
    output?: {
        publicPath?: string;
    };
}

const usage = (config: Configuration) => {
    config.entry.push('webpack-plugin-serve/client');

    config.watch = true;

    config.plugins!.push(
        new WebpackPluginServe({
            compress: true,
            historyFallback: true,
            host: '0.0.0.0',
            port: 3808,
            liveReload: true,
            middleware: (app: any, builtins: any) =>
                app.use(async (ctx: any, next: any) => {
                    await next();
                    ctx.set('Access-Control-Allow-Headers', '*');
                    ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                    ctx.set('Access-Control-Allow-Origin', '*');
                }),
            static: '/',

            status: true,
            progress: true,
        }),
    );

    config.output!.publicPath = '/';

    return config;
};

const baseConfig: Configuration = {
    entry: ['index.js'],
};

const configWithServer = usage(baseConfig);

const newConfigWithGlobby = new WebpackPluginServe({
    static: {
        glob: ['dist/**/public'],
        options: { onlyDirectories: true },
    },
});
