
import xmlbuilder = require('xmlbuilder');
var xml = xmlbuilder.create;
var doc = xmlbuilder.begin;

// https://github.com/oozcitak/xmlbuilder-js/blob/master/test/comment.coffee
xml('comment', {}, {}, { headless: true }).comment('<>\'"&\t\n\r').end();

// https://github.com/oozcitak/xmlbuilder-js/blob/master/test/instructions.coffee
xml('test17', { headless: true }).ins('pi', 'mypi').end();

xml('test17', { headless: true }).ins({ 'pi': 'mypi', 'pi2': 'mypi2', 'pi3': null }).end();

xml('test17', { headless: true }).ins(['pi', 'pi2']).end();

xml('test18', { headless: true })
    .ins('renderCache.subset', '"Verdana" 0 0 ISO-8859-1 4 268 67 "#(),-./')
    .ins('pitarget', () => 'pivalue')
    .end();

// https://github.com/oozcitak/xmlbuilder-js/blob/master/test/createxml.coffee
xml('root')
    .ele('xmlbuilder')
    .att('for', 'node-js')
    .com('CoffeeScript is awesome.')
    .nod('repo')
    .att('type', 'git')
    .txt('git://github.com/oozcitak/xmlbuilder-js.git')
    .up()
    .up()
    .ele('test')
    .att('escaped', 'chars <>\'"&\t\n\r')
    .txt('complete 100%<>\'"&\t\n\r')
    .up()
    .ele('cdata')
    .cdata('<test att="val">this is a test</test>\nSecond line')
    .up()
    .ele('raw')
    .raw('&<>&')
    .up()
    .ele('atttest', { 'att': 'val' }, 'text')
    .up()
    .ele('atttest', 'text')
    .end();

// https://github.com/oozcitak/xmlbuilder-js/blob/master/test/basic/begin.coffee
doc().ele('root', { att: 'val' }).ele('test').end();

xml({
    displayNotification: {
        level: 'error',
        message: 'an error occurred'
    }
});

// https://github.com/oozcitak/xmlbuilder-js/wiki#create
xml('root', {
    stringify: {
        eleName: function(val) {
            return 'myns:' + val;
        }
    }
});

// https://github.com/oozcitak/xmlbuilder-js/wiki#converting-to-string
xml('root').end({
    pretty: true,
    indent: '  ',
    newline: '\n',
    allowEmpty: false,
    spacebeforeslash: ''
});

xml('root').ele('child').toString({
    pretty: true,
    indent: '  ',
    offset: 1,
    newline: '\n',
    spacebeforeslash: ''
});

// https://github.com/oozcitak/xmlbuilder-js/wiki#xml-writers
xml('root').end({
    writer: {
        document: (doc) => { },
        attribute: (doc) => { },
        cdata: (node, level) => { },
        comment: (node, level) => { },
        declaration: (node, level) => { },
        docType: (node, level) => { },
        element: (node, level) => { },
        processingInstruction: (node, level) => { },
        raw: (node, level) => { },
        text: (node, level) => { },
        dtdAttList: (node, level) => { },
        dtdElement: (node, level) => { },
        dtdEntity: (node, level) => { },
        dtdNotation: (node, level) => { },
    }
});

// https://github.com/oozcitak/xmlbuilder-js/wiki/XML-Prolog
xml('xbel',
    { version: '1.0', encoding: 'UTF-8'},
    { pubID: '+//IDN python.org//DTD XML Bookmark Exchange Language 1.0//EN//XML',
      sysID: 'http://www.python.org/topics/xml/dtds/xbel-1.0.dtd'
    }
);

xml('root')
  .dec('1.0', 'UTF-8', true)
  .ele('node');

xml('HTML')
  .dtd('-//W3C//DTD HTML 4.01//EN', 'http://www.w3.org/TR/html4/strict.dtd');
