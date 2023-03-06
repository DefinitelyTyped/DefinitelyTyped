import { runServer } from 'metro';
import { ConfigT } from 'metro-config';
import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';

// tslint:disable-next-line:no-object-literal-type-assertion
const config: ConfigT = {} as ConfigT;

runServer(config, {
    hasReducedPerformance: true,
    host: 'npmjs.org',
    onError: (error: Error & { code?: string }): void => {},
    onReady: (server: HttpServer | HttpsServer): void => {},
    runInspectorProxy: true,
    secureServerOptions: {},
    secure: true,
    secureCert: 'cert',
    secureKey: 'key',
});
