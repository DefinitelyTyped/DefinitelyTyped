import unindentCJS = require('unindent');
import * as unindentES6 from 'unindent';

const x: string = unindentCJS('value', { trim: true, tabSize: 5 });
const y: string = unindentES6('value', { trim: true, tabSize: 5 });

unindentES6('value', { trim: true });
unindentES6('value', { tabSize: 5 });
unindentES6('value');
