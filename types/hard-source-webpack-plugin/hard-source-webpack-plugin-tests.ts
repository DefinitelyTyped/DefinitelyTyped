import * as HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import { ForkOptions, ChildProcess } from 'child_process';
import * as webpack from 'webpack';

new HardSourceWebpackPlugin({
    info: {
        level: 'debug',
        mode: 'test',
    }
});

new HardSourceWebpackPlugin.ExcludeModulePlugin([
    { test: /mini-css-extract-plugin[\\/]dist[\\/]loader/ },
    {
        test: 'mini-css-extract-plugin',
        include: '/path/to/vendor'
    },
]);

new HardSourceWebpackPlugin.HardSourceLevelDbSerializerPlugin();
new HardSourceWebpackPlugin.LevelDbSerializerPlugin();
new HardSourceWebpackPlugin.SerializerAppend2Plugin();
new HardSourceWebpackPlugin.SerializerAppendPlugin();
new HardSourceWebpackPlugin.SerializerCacachePlugin();
new HardSourceWebpackPlugin.SerializerJsonPlugin();

new HardSourceWebpackPlugin.ParallelModulePlugin({
    fork: ((forkFn: (modulePath: string, args?: ReadonlyArray<string>, options?: ForkOptions) => ChildProcess,
            compiler: webpack.Compiler,
            webpackBin: string) => {
    }),
    numWorkers: () => 3,
    minModules: 10,
});
