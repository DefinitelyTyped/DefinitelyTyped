import { Configuration, WebpackPluginInstance } from "webpack";
import WebpackReactComponentNamePlugin, { type Options, type PathMatch } from "webpack-react-component-name";

const plugin: WebpackPluginInstance = new WebpackReactComponentNamePlugin();

const plugin2: WebpackPluginInstance = new WebpackReactComponentNamePlugin(undefined);

const plugin3: WebpackPluginInstance = new WebpackReactComponentNamePlugin({});

const manyOptions: Options[] = [{}, {
    parseDependencies: undefined,
    include: undefined,
    exclude: undefined,
}, {
    parseDependencies: false,
}, {
    parseDependencies: true,
}, {
    include: [],
}, {
    exclude: [],
}];

const pathMatches: PathMatch[] = ["test", /test/, (path: string) => path === "test"];

const configuration: Configuration = {
    plugins: [plugin],
};
