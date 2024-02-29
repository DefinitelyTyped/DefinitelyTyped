import GenerateJsonWebpackPlugin = require("generate-json-webpack-plugin");

new GenerateJsonWebpackPlugin("name", { key: "value " });

new GenerateJsonWebpackPlugin("name", { key: "value " }, null);

new GenerateJsonWebpackPlugin("name", { key: "value " }, null, null);

new GenerateJsonWebpackPlugin("name", { key: "value " }, null, 4);

new GenerateJsonWebpackPlugin("name", { key: "value " }, (key, value) => `${key}${value}`);

new GenerateJsonWebpackPlugin("name", { key: "value " }, (key, value) => `${key}${value}`, null);

new GenerateJsonWebpackPlugin("name", { key: "value " }, (key, value) => `${key}${value}`, 4);

new GenerateJsonWebpackPlugin("name", { key: "value " }, (key, value) => `${key}${value}`, " ");
