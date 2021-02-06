import { StatsWriterPlugin } from 'webpack-stats-plugin';

const INDENT = 2;
const STAT_RESET = Object.freeze({});

module.exports = {
    plugins: [
        new StatsWriterPlugin(),
        new StatsWriterPlugin({}),
        new StatsWriterPlugin({
            filename: 'stats-transform.json',
            fields: null,
            transform: data => {
                return JSON.stringify(data.assetsByChunkName, null, INDENT);
            },
        }),
        new StatsWriterPlugin({
            filename: 'stats-transform.md',
            fields: null,
            transform(data) {
                const assetsByChunkName = data.assetsByChunkName;
                return Object.keys(assetsByChunkName).reduce((memo, key) => {
                    return `${memo}${key} | ${assetsByChunkName[key]}\n`;
                }, 'Name | Asset\n:--- | :----\n');
            },
        }),
        new StatsWriterPlugin({
            filename: 'stats-transform-custom-obj.json',
            transform(data) {
                return JSON.stringify(
                    {
                        main: data.assetsByChunkName.main,
                    },
                    null,
                    INDENT,
                );
            },
        }),
        new StatsWriterPlugin({
            filename: 'stats-custom.json',
        }),
        new StatsWriterPlugin({
            filename: '../build2/stats-custom2.json',
        }),
        new StatsWriterPlugin({
            filename: 'stats-transform-promise.json',
            transform(data) {
                return (
                    Promise.resolve()
                        // Force async.
                        .then(
                            () =>
                                new Promise(res => {
                                    process.nextTick(res);
                                }),
                        )
                        .then(() =>
                            JSON.stringify(
                                {
                                    main: data.assetsByChunkName.main,
                                },
                                null,
                                INDENT,
                            ),
                        )
                );
            },
        }),
        new StatsWriterPlugin({
            filename: 'stats-custom-stats.json',
            stats: { ...STAT_RESET, assets: true },
            transform(data) {
                delete data.filteredAssets;
                return JSON.stringify(data, null, INDENT);
            },
        }),
        new StatsWriterPlugin({
            filename: 'stats-custom-stats-fields.json',
            fields: ['errors', 'warnings', 'assets', 'hash', 'publicPath', 'namedChunkGroups'],
        }),
        new StatsWriterPlugin({
            filename: 'stats-override-tostring-opt.json',
            stats: {
                ...STAT_RESET,
                chunks: true,
            },
            transform(data) {
                data.chunks = data.chunks.map((chunk: any) => {
                    return ['rendered', 'initial', 'entry', 'size', 'names', 'parents'].reduce(
                        (obj: any, key: string) => {
                            obj[key] = chunk[key];
                            return obj;
                        },
                        {},
                    );
                });
                return JSON.stringify(data, null, INDENT);
            },
        }),
    ],
};
