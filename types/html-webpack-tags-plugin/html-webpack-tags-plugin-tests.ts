import HtmlWebpackPlugin = require('html-webpack-plugin');
import * as tags from 'html-webpack-tags-plugin';

const optionsArray: tags.Options[] = [
    {
        tags: 'tag'
    },
    {
        tags: ['tags', 'hugs'],
        files: 'readme.txt'
    },
    {
        tags: ['tags', 'hugs'],
        files: 'readme.txt',
        append: true
    }
];

const plugins: HtmlWebpackPlugin[] = optionsArray.map(options => new HtmlWebpackPlugin(options));
