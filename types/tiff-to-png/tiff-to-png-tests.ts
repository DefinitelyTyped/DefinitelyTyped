import ConvertTiff = require('tiff-to-png');
import logger = require('tiff-to-png/logger');
import TiffConverter = require('tiff-to-png');

logger.error('Logging test error at 0');
logger.level = 1;
logger.error('Logging test error at 1');
logger.level = 0;
logger.title('Logging test title at 0');
logger.level = 0;
logger.tabbed('Logging test tabbed content at 0');
logger.success('Logging test success at 0');
logger.fail('Logging test fail at 1');
logger.space();
logger.debugError('./test/foo', 'logging test debug error at 0');

let options: TiffConverter.Options = {
    page: 'A4',
    type: 'png',
    logLevel: 0,
};
new ConvertTiff();
new ConvertTiff({
    page: 'A4',
    type: 'png',
    logLevel: 1,
});
let converter = new ConvertTiff(options);
converter.options; // $ExpectType Options
converter.complete(['test']);

(async () => {
    const command = 'test command';
    await ConvertTiff.createDir('/test', 'test');
    await ConvertTiff.call(command);
    const converter = new ConvertTiff(options);
    await converter.removePaths();
})();
const objects = [{ test: 'foo' }, { test: 'foo' }, { test: 'oof' }];

ConvertTiff.count(objects, 'test', 'foo');

options = {
    logLevel: 1,
};
converter = new ConvertTiff(options);
const location = '/srv/www/mysite/public/documents';
converter.convertOne('/home/tiffs/document_one.tif', location);

converter.convertOne('myFile.tiff', '/path/to/location').then(({ converted, errors }) => {
    // Do the business on complete
});
