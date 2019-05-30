import format = require("xml-formatter");

const testXml = '<text><test><test><text>';

format(testXml);

const options: format.Options = {
  collapseContent: true,
  indetation: '   ',
  stripComments: true,
  debug: true,
};

format(testXml, options);
