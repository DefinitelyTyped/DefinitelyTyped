/// <reference types="node" />

import * as wtf from 'wtfnode';

wtf.init();
wtf.setLogger('info', (message?: any, ...optionalParams: any[]) => console.info(message, ...optionalParams));
wtf.setLogger('warn', (message?: any, ...optionalParams: any[]) => console.warn(message, ...optionalParams));
wtf.setLogger('error', (message?: any, ...optionalParams: any[]) => console.error(message, ...optionalParams));
wtf.dump();
wtf.resetLoggers();
