import * as ackeeTracker from 'ackee-tracker';

ackeeTracker.attributes();
ackeeTracker.attributes(true);

const instance1 = ackeeTracker.create('https://example.com');

const { stop } = instance1.record('hd11f820-68a1-11e6-8047-79c0c2d9bce0');
stop();

ackeeTracker.detect();

const instance2 = ackeeTracker.create('https://example.com', {
        ignoreLocalhost: true,
        detailed: false,
        ignoreOwnVisits: false
    },
);

instance2.record('hd11f820-68a1-11e6-8047-79c0c2d9bce0', ackeeTracker.attributes(true));
