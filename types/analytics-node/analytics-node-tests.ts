import Analytics = require("analytics-node");
let analytics: Analytics;

function testConfig(): void {
  analytics = new Analytics('YOUR_WRITE_KEY', {
    flushAt: 20,
    flushInterval: 10000,
    host: "http://example.com",
    enable: true,
    timeout: 1000,
  });
}

function testConfigWithStringTimeout(): void {
  analytics = new Analytics('YOUR_WRITE_KEY', {
    flushAt: 20,
    flushInterval: 10000,
    host: "http://example.com",
    enable: true,
    timeout: '1000',
  });
}

function testConfigWithFlushedSet(): void {
  analytics = new Analytics('YOUR_WRITE_KEY', {
    flushAt: 20,
    flushInterval: 10000,
    host: "http://example.com",
    enable: true,
    timeout: 1000,
    flushed: true,
  });
}

function testIdentify(): void {
  analytics.identify({
    userId: '019mr8mf4r',
    traits: {
      name: 'Michael Bolton',
      email: 'mbolton@initech.com',
      plan: 'Enterprise',
      friends: 42
    }
  });

  analytics.identify({
    userId: '019mr8mf4r',
    traits: {
      name: 'Michael Bolton',
      email: 'mbolton@initech.com',
      plan: 'Enterprise',
      friends: 42
    }
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function testTrack(): void {
  analytics.track({
    userId: '019mr8mf4r',
    event: 'Purchased an Item',
    properties: {
      revenue: 39.95,
      shippingMethod: '2-day'
    }
  });

  analytics.track({
    anonymousId: '019mr8mf4r',
    event: 'Purchased an Item',
    properties: {
      revenue: 39.95,
      shippingMethod: '2-day'
    }
  });

  analytics.track({
    event: 'Purchased an Item',
    properties: {
      revenue: 39.95,
      shippingMethod: '2-day'
    }
  });

  analytics.track({
    userId: '019mr8mf4r',
    event: 'Purchased an Item',
    properties: {
      revenue: 39.95,
      shippingMethod: '2-day'
    }
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function testPage(): void {
  analytics.page({
    userId: '019mr8mf4r',
    category: 'Docs',
    name: 'Node.js Library',
    properties: {
      url: 'https://segment.com/docs/libraries/node',
      path: '/docs/libraries/node/',
      title: 'Node.js Library - Segment',
      referrer: 'https://github.com/segmentio/analytics-node'
    }
  });

  analytics.page({
    userId: '019mr8mf4r',
    category: 'Docs',
    name: 'Node.js Library',
    properties: {
      url: 'https://segment.com/docs/libraries/node',
      path: '/docs/libraries/node/',
      title: 'Node.js Library - Segment',
      referrer: 'https://github.com/segmentio/analytics-node'
    }
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function testScreen(): void {
  analytics.screen({
    userId: '019mr8mf4r',
    name: 'Node.js Library',
    properties: {
      url: 'https://segment.com/docs/libraries/node',
      path: '/docs/libraries/node/',
      title: 'Node.js Library - Segment',
      referrer: 'https://github.com/segmentio/analytics-node'
    }
  });

  analytics.screen({
    userId: '019mr8mf4r',
    name: 'Node.js Library',
    properties: {
      url: 'https://segment.com/docs/libraries/node',
      path: '/docs/libraries/node/',
      title: 'Node.js Library - Segment',
      referrer: 'https://github.com/segmentio/analytics-node'
    }
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function testAlias(): void {
  // the anonymous user does actions ...
  analytics.track({ userId: 'anonymous_user', event: 'Anonymous Event' });
  // the anonymous user signs up and is aliased
  analytics.alias({ previousId: 'anonymous_user', userId: 'identified@gmail.com' });
  // the identified user is identified
  analytics.identify({ userId: 'identified@gmail.com', traits: { plan: 'Free' } });
  // the identified user does actions ...
  analytics.track({ userId: 'identified@gmail.com', event: 'Identified Action' });
}

function testGroup(): void {
  analytics.group({
    userId: '019mr8mf4r',
    groupId: '56',
    traits: {
      name: 'Initech',
      description: 'Accounting Software'
    }
  });

  analytics.group({
    userId: '019mr8mf4r',
    groupId: '56',
    traits: {
      name: 'Initech',
      description: 'Accounting Software'
    }
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function testIntegrations(): void {
  analytics.track({
    event: 'Upgraded Membership',
    userId: '97234974',
    integrations: {
      All: false,
      Vero: true,
      'Google Analytics': false,
      AppsFlyer: {
        appsflyer_id: 'example-id'
      }
    }
  });

  analytics.track({
    event: 'Upgraded Membership',
    userId: '97234974',
    integrations: {
      All: false,
      Vero: true,
      'Google Analytics': false,
      AppsFlyer: {
        appsflyer_id: 'example-id'
      }
    }
  }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

function testFlush(): void {
  analytics.flush();
  analytics.flush((err, batch) => {
    if (err) {
        alert("Oh nos!");
    } else {
        console.log(batch.batch[0].type);
    }
  });
}
