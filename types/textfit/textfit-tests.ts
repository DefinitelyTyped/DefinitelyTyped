import textFit = require('textfit');
import $ = require('jquery');

const element = document.createElement('div');
const elements = Array(2).map(() => document.createElement('div'));

const options: textFit.TextFitOption = {
    alignVert: false,
    alignHoriz: false,
    detectMultiLine: true,
    minFontSize: 6,
    maxFontSize: 80,
    reProcess: true,
    widthOnly: false,
    alignVertWithFlexbox: false,
};

textFit(element, options);
textFit(elements, options);

const ul = document.createElement('ul');
ul.append(document.createElement('li'));

const nodeList = ul.querySelectorAll('li');
textFit(nodeList, options);

const htmlCollection = ul.children;
textFit(htmlCollection, options);

textFit($('#dummy_selector'), options);
