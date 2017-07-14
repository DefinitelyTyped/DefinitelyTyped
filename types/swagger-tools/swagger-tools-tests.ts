// 2.0 examples from https://github.com/apigee-127/swagger-tools/blob/master/examples/2.0/index.js

import * as connect from 'connect';
import { createServer } from 'http';
import * as swaggerTools from 'swagger-tools';

const app = connect();

const serverPort = 3000;

// swaggerRouter configuration
const options = {
    controllers: './controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

const swaggerUiOptions = {
    apiDocs: 'apiDocs',
    swaggerUi: 'swaggerUi',
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
// tslint:disable-next-line no-var-requires
const swaggerDoc20 = require('./api/swagger.json');

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc20, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi(swaggerUiOptions));
    app.use(middleware.swaggerUi());

    // Start the server
    createServer(app).listen(serverPort, () => {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    });
});

// 1.2 examples from https://github.com/apigee-127/swagger-tools/blob/master/examples/1.2/index.js

// The Swagger Resource Listing Document (require it, build it programmatically, fetch it from a URL, ...)
// tslint:disable-next-line no-var-requires
const apiDoc12 = require('./api/api-doc.json');
// The Swagger API Declaration Documents (require them, build them programmatically, fetch them from a URL, ...)
const apiDeclarations = [
    // tslint:disable-next-line no-var-requires
    require('./api/weather.json')
];

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(apiDoc12, apiDeclarations, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi({
        '/weather': apiDeclarations[0]
    }));

    // Start the server
    createServer(app).listen(serverPort, () => {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    });
});
