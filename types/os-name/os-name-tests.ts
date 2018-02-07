import * as os from 'os';
import osName = require('os-name');

osName();
osName(os.platform(), os.release());
osName('darwin', '14.0.0');
osName('linux', '3.13.0-24-generic');
osName('win32', '6.3.9600');
