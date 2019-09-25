import format = require("xml-formatter");

const testXml = '<text><test></test></text>';

format(testXml);

const options: format.Options = {
    collapseContent: true,
    indentation: '   ',
    stripComments: true,
    debug: true,
};

format(testXml, options);
