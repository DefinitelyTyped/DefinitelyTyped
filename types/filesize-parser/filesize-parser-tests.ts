import filesizeParser = require('filesize-parser');

const size: number = filesizeParser('200kb');
const sizeWithBase: number = filesizeParser('300mb', { base: 10 });
