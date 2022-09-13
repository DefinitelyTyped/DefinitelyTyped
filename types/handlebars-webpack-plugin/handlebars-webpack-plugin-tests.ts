import path = require('path');
import HandlebarsPlugin = require('handlebars-webpack-plugin');
import HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HandlebarsPlugin(),
        new HandlebarsPlugin({}),
        new HandlebarsPlugin({
            htmlWebpackPlugin: {
                title: 'hey',
            },
        }),
        new HandlebarsPlugin({
            htmlWebpackPlugin: {
                title: 'hey',
                HtmlWebpackPlugin,
            },
        }),
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), 'app', 'src', '*.hbs'),
            output: path.join(process.cwd(), 'build', '[name].html'),
            data: require('package.json'),
            partials: [path.join(process.cwd(), 'app', 'src', 'components', '*', '*.hbs')],
            helpers: {
                hi: (arg1, arg2, options) => {},
                hey: (arg1, arg2, options) => {},
            },
            getTargetFilepath: (filepath, outputTemplate, rootFolder) => {
                const fileName = path.basename(filepath).replace(path.extname(filepath), '');
                return outputTemplate.replace('[name]', fileName);
            },
            getPartialId: filePath => {
                return filePath.match(/\/([^/]+\/[^/]+)\.[^.]+$/)?.pop();
            },
        }),
        new HandlebarsPlugin({
            entry: path.join(process.cwd(), 'app', 'src', '*.hbs'),
            output: path.join(process.cwd(), 'build', '[name].html'),
            data: path.join(__dirname, 'app/data/project.json'),
            partials: [path.join(process.cwd(), 'app', 'src', 'components', '*', '*.hbs')],
            helpers: {
                is: (arg1, arg2, options) => {},
                projectHelpers: path.join(process.cwd(), 'app', 'helpers', '*.helper.js'),
            },
            onBeforeSetup: Handlebars => {},
            onBeforeAddPartials: (Handlebars, partialsMap) => {},
            onBeforeCompile: (Handlebars, templateContent) => {},
            onBeforeRender: (Handlebars, data, filename) => {},
            onBeforeSave: (Handlebars, resultHtml, filename) => {},
            onDone: (Handlebars, filename) => {},
        }),
    ],
};
