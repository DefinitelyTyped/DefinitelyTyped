import { Configuration } from 'webpack';
import OptimizeCssAssetsPlugin = require('unused-webpack-plugin');

let configuration: Configuration;

configuration = { plugins: [new OptimizeCssAssetsPlugin({ directories: [''] })] };
configuration = { plugins: [new OptimizeCssAssetsPlugin({ directories: [''], exclude: [''] })] };
configuration = { plugins: [new OptimizeCssAssetsPlugin({ directories: [''], root: '' })] };
configuration = { plugins: [new OptimizeCssAssetsPlugin({ directories: [''], failOnUnused: true })] };
configuration = { plugins: [new OptimizeCssAssetsPlugin({ directories: [''], useGitIgnore: false })] };
