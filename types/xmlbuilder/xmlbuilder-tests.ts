
import xmlbuilder = require('xmlbuilder');
var xml = xmlbuilder.create;

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

xml({
  displayNotification: {
      level: 'error',
      message: 'an error occurred'
  }
});