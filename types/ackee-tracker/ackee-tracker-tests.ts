import * as ackeeTracker from 'ackee-tracker';

ackeeTracker.attributes();
ackeeTracker.attributes(true);

const instance1 = ackeeTracker.create('https://example.com');

const { stop } = instance1.record('hd11f820-68a1-11e6-8047-79c0c2d9bce0');
stop();

const stop2 = instance1.updateRecord('ID');
stop2.stop();

instance1.action('ID', { key: "key", value: 0 }, (id: string) => {});
instance1.action('ID', { key: "key" }, (id: string) => {});
instance1.action('ID', { key: "key", value: 0 });
instance1.action('ID', { key: "key" });

instance1.updateAction('ID', { key: "key", value: 0 });
instance1.updateAction('ID', { key: "key" });

ackeeTracker.detect();

const instance2 = ackeeTracker.create('https://example.com', {
        ignoreLocalhost: true,
        detailed: false,
        ignoreOwnVisits: false
    },
);

instance2.record('hd11f820-68a1-11e6-8047-79c0c2d9bce0', ackeeTracker.attributes(true));

const options: ackeeTracker.TrackingOptions = {
    ignoreLocalhost: true,
    detailed: true,
    ignoreOwnVisits: true
};

const instance3 = ackeeTracker.create('https://example.com', {
        ignoreLocalhost: options.ignoreLocalhost,
        detailed: options.detailed,
        ignoreOwnVisits: options.ignoreOwnVisits
    },
);

instance3.record('https://example.com', ackeeTracker.attributes(options.detailed));
