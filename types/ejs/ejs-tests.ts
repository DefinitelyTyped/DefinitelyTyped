import ejs = require("ejs");
import LRU = require("lru-cache");
import { TemplateFunction } from "ejs";

const fileName = 'test.ejs';
const people = ['geddy', 'neil', 'alex'];
const data = { people };
const template = '<%= people.join(", "); %>';
const options = {delimiter: '$'};
let result: string;
let cacheResult: string;
let ejsFunction: ejs.TemplateFunction;

const SimpleCallback = (err: any, html?: string) => {
    if (err) {
        return null;
    }
    return html;
};

result = ejs.render(template);
result = ejs.render(template, data);
result = ejs.render(template, data, options);

cacheResult = ejs.renderFile(fileName, SimpleCallback);
cacheResult = ejs.renderFile(fileName, data, SimpleCallback);
cacheResult = ejs.renderFile(fileName, data, options, SimpleCallback);

ejsFunction = ejs.compile(template);
ejsFunction({});
ejsFunction(data);
ejs.compile(template, options);

ejs.fileLoader = (str: string) => str;

ejs.clearCache();

ejs.cache = LRU(100);
