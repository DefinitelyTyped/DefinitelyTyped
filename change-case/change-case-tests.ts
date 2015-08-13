/// <reference path="change-case.d.ts"/>

import changeCase = require("change-case");

var s: string;
var b: boolean;

s = changeCase.dot(s);
s = changeCase.dotCase(s);
s = changeCase.swap(s);
s = changeCase.swapCase(s);
s = changeCase.path(s);
s = changeCase.pathCase(s);
s = changeCase.upper(s);
s = changeCase.upperCase(s);
s = changeCase.lower(s);
s = changeCase.lowerCase(s);
s = changeCase.camel(s);
s = changeCase.camelCase(s);
s = changeCase.snake(s);
s = changeCase.snakeCase(s);
s = changeCase.title(s);
s = changeCase.titleCase(s);
s = changeCase.param(s);
s = changeCase.paramCase(s);
s = changeCase.pascal(s);
s = changeCase.pascalCase(s);
s = changeCase.constant(s);
s = changeCase.constantCase(s);
s = changeCase.sentence(s);
s = changeCase.sentenceCase(s);
b = changeCase.isUpper(s);
b = changeCase.isUpperCase(s);
b = changeCase.isLower(s);
b = changeCase.isLowerCase(s);
s = changeCase.ucFirst(s);
s = changeCase.upperCaseFirst(s);
