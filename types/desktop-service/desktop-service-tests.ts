import Service = require('desktop-service');

// $ExpectType Service
new Service({ name: 'Sample Service', description: 'A sample service', script: 'sample-service.js' });

// $ExpectError
new Service();
