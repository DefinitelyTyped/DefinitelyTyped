import { PluginOption } from 'vite';
import reactSvgPlugin = require('vite-plugin-react-svg');

const testCases: Array<PluginOption | PluginOption[]> = [
    reactSvgPlugin({
        defaultExport: 'component',
        expandProps: 'start',
        memo: false,
        ref: false,
        replaceAttrValues: {
            someKey: 42,
            anotherKey: 'value',
        },
        svgProps: {
            role: 'alert',
        },
        svgo: true,
        svgoConfig: {
            datauri: 'base64',
        },
        titleProp: true,
    }),
    reactSvgPlugin({
        defaultExport: 'url',
        expandProps: 'end',
    }),
    reactSvgPlugin({
        expandProps: false,
    }),
    reactSvgPlugin({
        // @ts-expect-error
        expandProps: true,
    }),
    reactSvgPlugin({
        // @ts-expect-error
        expandProps: 'en',
    }),
];
