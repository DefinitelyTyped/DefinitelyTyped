import * as ackeeTracker from 'ackee-tracker';

ackeeTracker.attributes();
ackeeTracker.attributes(true);

const instance1 = ackeeTracker.create({
    server: 'https://example.com',
    domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
});

const { stop } = instance1.record();
stop();

ackeeTracker.detect();

const instance2 = ackeeTracker.create(
    {
        server: 'https://example.com',
        domainId: 'hd11f820-68a1-11e6-8047-79c0c2d9bce0',
    },
    {
        ignoreLocalhost: true,
        detailed: false,
    },
);

instance2.record(ackeeTracker.attributes(true));
