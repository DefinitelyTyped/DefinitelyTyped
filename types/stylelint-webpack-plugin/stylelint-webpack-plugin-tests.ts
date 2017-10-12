import * as webpack from "webpack";
import * as StylelintWebpackPlugin from "stylelint-webpack-plugin";

const compiler = webpack({
    plugins: [
        new StylelintWebpackPlugin(),
    ],
});
