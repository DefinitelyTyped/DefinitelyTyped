import visualizer, { PluginVisualizerOptions } from "rollup-plugin-visualizer";

visualizer(); // $ExpectType Plugin
visualizer({});
const fullOptions: PluginVisualizerOptions = {
    filename: "filename",
    title: "title",
    sourcemap: true,
    open: true,
    template: "sunburst",
    json: true,
    gzipSize: true,
    brotliSize: true,
};
visualizer(fullOptions);
