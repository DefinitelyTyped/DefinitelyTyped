/// <reference path="./analytics-node.d.ts" />

var analytics: AnalyticsNode.Analytics;
import Analytics = require("analytics-node");

function testConfig(): void {
  analytics = new Analytics('YOUR_WRITE_KEY', {
    flushAt: 20,
    flushAfter: 10000
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
}

function testAlias(): void {
  // the anonymous user does actions ...
  analytics.track({ userId: 'anonymous_user', event: 'Anonymous Event' })
  // the anonymous user signs up and is aliased
  analytics.alias({ previousId: 'anonymous_user', userId: 'identified@gmail.com' })
  // the identified user is identified
  analytics.identify({ userId: 'identified@gmail.com', traits: { plan: 'Free' } })
  // the identified user does actions ...
  analytics.track({ userId: 'identified@gmail.com', event: 'Identified Action' })
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
}

function testIntegrations(): void {
  analytics.track({
    event: 'Upgraded Membershipt',
    userId: '97234974',
    integrations: {
      'All': false,
      'Vero': true,
      'Google Analytics': false
    }
  });
}
