import GenerateJsonWebpackPlugin = require('generate-json-webpack-plugin');

new GenerateJsonWebpackPlugin('name', { key: 'value '});

new GenerateJsonWebpackPlugin('name', { key: 'value '}, (key, value) => `${key}${value}`);

new GenerateJsonWebpackPlugin('name', { key: 'value '}, (key, value) => `${key}${value}`, 4);

new GenerateJsonWebpackPlugin('name', { key: 'value '}, (key, value) => `${key}${value}`, ' ');
