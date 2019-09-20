import { Eureka, EurekaClient } from 'eureka-js-client';

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
      name: 'MyOwn'
    }
  },
  eureka: {
    // eureka server host / port
    host: '192.168.99.100',
    port: 32768
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
      name: 'MyOwn'
    }
  },
  eureka: {
    // eureka server host / port
    host: '192.168.99.100',
    port: 32768
  }
});

const ymlInitClient = new Eureka({
  cwd: `/opt/config`,
  filename: 'eureka-config'
});

// example using middleware to set-up HTTP authentication (https://www.npmjs.com/package/eureka-js-client#providing-custom-request-middleware)
const middlewareClient = new Eureka({
  requestMiddleware: (requestOpts, done) => {
    requestOpts.auth = {
      user: 'username',
      password: 'somepassword'
    };
    done(requestOpts);
  }
});

// Test callbacks
newerClient.start((err: Error) => {});
newerClient.start(() => {});
newerClient.start();
newerClient.stop((err: Error) => {});
newerClient.start(() => {});
newerClient.stop();

const fakeInstanceResponse: EurekaClient.EurekaInstanceConfig[] = [
  {
    instanceId: 'config-server:8888',
    hostName: '10.10.10.10',
    app: 'CONFIG-SERVER',
    ipAddr: '10.10.10.10',
    status: 'UP',
    overriddenstatus: 'UNKNOWN',
    port: {
      $: 8888,
      '@enabled': true
    },
    securePort: {
      $: 443,
      '@enabled': true
    },
    countryId: 1,
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn'
    },
    metadata: { '@class': 'java.util.Collections$EmptyMap' },
    homePageUrl: 'http://10.10.10.10:8888/',
    statusPageUrl: 'http://10.10.10.10:8888/info',
    healthCheckUrl: 'http://10.10.10.10:8888/v1/service-health',
    vipAddress: 'config-server',
    secureVipAddress: 'config-server',
    isCoordinatingDiscoveryServer: false,
    lastUpdatedTimestamp: 1544691255230,
    lastDirtyTimestamp: 1544691254634,
    actionType: 'ADDED'
  }
];
