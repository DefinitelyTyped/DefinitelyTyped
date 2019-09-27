import visualizer from 'rollup-plugin-visualizer';

visualizer(); // $ExpectType Plugin
const fullOptions = {
    filename: 'filename',
    title: 'title',
    sourcemap: true,
    open: true,
    template: '',
    bundlesRelative: true,
};
visualizer({});
visualizer(fullOptions);
