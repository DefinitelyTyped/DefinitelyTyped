import * as UglifyjsWebpackPlugin from "uglifyjs-webpack-plugin";
import * as webpack from "webpack";

const compiler = webpack({
    plugins: [
        new UglifyjsWebpackPlugin(),
    ],
});

const compilerOptions = webpack({
    plugins: [
        new UglifyjsWebpackPlugin({
            cache: false,
            parallel: true,
            sourceMap: true,
        }),
    ],
});
