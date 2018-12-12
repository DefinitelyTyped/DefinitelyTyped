import { Eureka } from 'eureka-js-client';

// example configuration
const client = new Eureka({
  // application instance information
  instance: {
    app: 'jqservice',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: 8080,
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: '192.168.99.100',
    port: 32768,
  }
});

// example configuration against newer Eureka (https://www.npmjs.com/package/eureka-js-client#400-bad-request-errors-from-eureka-server)
const newerClient = new Eureka({
  // application instance information
  instance: {
    app: 'jqservice',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      $: 443,
      '@enabled': true
    },
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: '192.168.99.100',
    port: 32768,
  }
});
