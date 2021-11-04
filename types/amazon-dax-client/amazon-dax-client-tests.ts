import AmazonDaxClient = require('amazon-dax-client');

const dax = new AmazonDaxClient({
    endpoints: ['endpoint'],
    region: 'region',
    apiVersion: '2012-08-10',
    httpOptions: {
        timeout: 50
    },
    maxRetries: 3
});
