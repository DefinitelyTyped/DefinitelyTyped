import PubSub = require('@google-cloud/pubsub');

// AUTHOR NOTES: We use the examples directly from the library documentation
// where possible. If there is a problem with a given example (e.g. undocumented
// feature or option), we make a note of it and provide an alternative example
// call instead.

///////////////////////////////////////////////////////////////////////////////
// PUBSUB
///////////////////////////////////////////////////////////////////////////////
{
    let pubsub: PubSub.PubSub;

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=PubSub
    // When running on Google Cloud Platform:
    pubsub = PubSub();
    // When running elsewhere:
    pubsub = PubSub({
        projectId: 'grape-spaceship-123',
        keyFilename: '/path/to/keyfile.json',
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=createSubscription
    // Subscribe to a topic:
    pubsub.createSubscription('messageCenter', 'newMessages', (err, subscription, apiResponse) => { });
    // Customize the subscription:
    // NOTE: ackDeadline, as given in the example, is undocumented, so create a subscription only with the KNOWN options
    pubsub.createSubscription('messageCenter', 'newMessages', {
        retainAckedMessages: true,
    }, (err, subscription, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    pubsub.createSubscription('messageCenter', 'newMessages').then((data) => {
        const subscription = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=createTopic
    // Create topic with callback
    pubsub.createTopic('my-new-topic', (err, topic, apiResponse) => {
        if (!err) {
            // The topic was created successfully.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    pubsub.createTopic('my-new-topic').then((data) => {
        const topic = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=getSnapshots
    // Get snapshots:
    pubsub.getSnapshots((err, snapshots) => {
        if (!err) {
            // snapshots is an array of Snapshot objects.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    pubsub.getSnapshots().then((data) => {
        const snapshots = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=getSnapshotsStream
    // Get snapshots stream
    pubsub.getSnapshotsStream()
        .on('error', console.error)
        .on('data', (snapshot) => {
            // snapshot is a Snapshot object.
        })
        .on('end', () => {
            // All snapshots retrieved.
        });
    // If you anticipate many results, you can end a stream early to prevent unnecessary processing and API requests.
    // NOTE: this had to be modified to work around the 'this' keyword as used in the example
    {
        const stream = pubsub.getSnapshotsStream();
        stream.on('data', (snapshot) => {
            stream.end();
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=getSubscriptions
    // Get subscriptions:
    pubsub.getSubscriptions((err, subscriptions) => {
        if (!err) {
            // subscriptions is an array of Subscription objects.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    pubsub.getSubscriptions().then((data) => {
        const subscriptions = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=getSubscriptionsStream
    // Get subscriptions stream
    pubsub.getSubscriptionsStream()
        .on('error', console.error)
        .on('data', (subscription) => {
            // subscription is a Subscription object.
        })
        .on('end', () => {
            // All subscriptions retrieved.
        });
    // If you anticipate many results, you can end a stream early to prevent unnecessary processing and API requests.
    // Note: this had to be modified to work around the 'this' keyword as used in the example.
    {
        const stream = pubsub.getSubscriptionsStream();
        stream.on('data', (subscription) => {
            stream.end();
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=getTopics
    // Get topics:
    pubsub.getTopics((err, topics) => {
        if (!err) {
            // topics is an array of Topic objects.
        }
    });
    // Customize the query:
    pubsub.getTopics({
        pageSize: 3
    }, (err, topics) => { });
    // If the callback is omitted, we'll return a Promise.
    pubsub.getTopics().then((data) => {
        const topics = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=getTopicsStream
    // Get topics stream:
    pubsub.getTopicsStream()
        .on('error', console.error)
        .on('data', (topic) => {
            // topic is a Topic object.
        })
        .on('end', () => {
            // All topics retrieved.
        });
    // If you anticipate many results, you can end a stream early to prevent unnecessary processing and API requests.
    // Note: this had to be modified to work around the 'this' keyword as used in the example.
    {
        const stream = pubsub.getTopicsStream();
        stream.on('data', (topic) => {
            stream.end();
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=snapshot
    // Snapshot:
    {
        const snapshot = pubsub.snapshot('my-snapshot');
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=subscription
    // Subscription:
    {
        const subscription = pubsub.subscription('my-subscription');

        // Register a listener for `message` events.
        subscription.on('message', (message) => {
            // Called every time a message is received.
            // message.id = ID of the message.
            // message.ackId = ID used to acknowledge the message receival.
            // message.data = Contents of the message.
            // message.attributes = Attributes of the message.
            // message.publishTime = Timestamp when Pub/Sub received the message.
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub?method=topic
    // Topic:
    {
        const topic = pubsub.topic('my-topic');
    }
}

///////////////////////////////////////////////////////////////////////////////
// PUBLISHER
///////////////////////////////////////////////////////////////////////////////
{
    const pubsub = PubSub();
    const topic = pubsub.topic('my-topic');
    const publisher = topic.publisher();

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/publisher?method=publish
    // Publish:
    publisher.publish(new Buffer('Hello, world!'), (err, messageId) => {
        if (err) {
            // Error handling omitted.
        }
    });
    // Optionally you can provide an object containing attributes for the message.
    publisher.publish(new Buffer('Hello, world!'), { key: 'value' }, (err, messageId) => {
        if (err) {
            // Error handling omitted.
        }
    });
}

///////////////////////////////////////////////////////////////////////////////
// SNAPSHOT
///////////////////////////////////////////////////////////////////////////////
{
    const pubsub = PubSub();
    const subscription = pubsub.subscription('my-subscription');

    // There are two type of snapshots; the ones obtained from subscription.createSnapshot() have more functionality
    const snapshot = pubsub.snapshot('my-snapshot');
    const snapshotFromSubscription = subscription.snapshot('my-snapshot');

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/snapshot?method=create
    // Note: Only available to snapshots created via methods of Subscription
    // Create snapshot
    snapshotFromSubscription.create('my-snapshot', (err, snapshot, apiResponse) => {
        if (!err) {
            // The snapshot was created successfully.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    snapshotFromSubscription.create('my-snapshot').then((data) => {
        const snapshot = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/snapshot?method=delete
    // Delete the snapshot
    snapshot.delete((err, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    snapshot.delete().then((data) => {
        const apiResponse = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/snapshot?method=seek
    // Note: Only available to snapshots created via methods of Subscription
    // Seek:
    snapshotFromSubscription.seek((err, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    snapshotFromSubscription.seek().then((data) => {
        const apiResponse = data[0];
    });
}

///////////////////////////////////////////////////////////////////////////////
// SUBSCRIPTION
///////////////////////////////////////////////////////////////////////////////
{
    const pubsub = PubSub();
    const topic = pubsub.topic('my-topic');
    const subscription = topic.subscription('my-subscription');

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=close
    // Close:
    subscription.close((err) => {
        if (err) {
            // Error handling omitted.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    subscription.close().then(() => { });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=createSnapshot
    // Create snapshot:
    subscription.createSnapshot('my-snapshot', (err, snapshot, apiResponse) => {
        if (!err) {
            // The snapshot was created successfully.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    subscription.createSnapshot('my-snapshot').then((data) => {
        const snapshot = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=delete
    // Delete:
    subscription.delete((err, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    subscription.delete().then((data) => {
        const apiResponse = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=exists
    // Exists:
    subscription.exists((err, exists) => { });
    // If the callback is omitted, we'll return a Promise.
    subscription.exists().then((data) => {
        const exists = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=get
    // Get:
    subscription.get((err, subscription, apiResponse) => {
        // The `subscription` data has been populated.
    });
    // If the callback is omitted, we'll return a Promise.
    subscription.get().then((data) => {
        const subscription = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=getMetadata
    // Get metadata:
    subscription.getMetadata((err, apiResponse) => {
        if (err) {
            // Error handling omitted.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    subscription.getMetadata().then((data) => {
        const apiResponse = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=modifyPushConfig
    // Modify push config:
    // Note: Had to modify the code to force typings
    {
        const pushConfig: PubSub.Subscription.PushConfig = {
            pushEndpoint: 'https://mydomain.com/push',
            attributes: {
                'x-goog-version': 'v1',
            }
        };
        subscription.modifyPushConfig(pushConfig, (err, apiResponse) => {
            if (err) {
                // Error handling omitted.
            }
        });
        // If the callback is omitted, we'll return a Promise.
        subscription.modifyPushConfig(pushConfig).then((data) => {
            const apiResponse = data[0];
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=seek
    // Seek:
    {
        const callback: PubSub.Subscription.SeekCallback = (err, resp) => {
            if (!err) {
                // Seek was successful.
            }
        };
        subscription.seek('my-snapshot', callback);
        // Alternatively, to specify a certain point in time, you can provide a Date object.
        subscription.seek(new Date('October 21 2015'), callback);
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=setMetadata
    {
        const metadata = {
            key: 'value'
        };

        // Set metadata
        subscription.setMetadata(metadata, (err, apiResponse) => {
            if (err) {
                // Error handling omitted.
            }
        });
        // If the callback is omitted, we'll return a Promise.
        subscription.setMetadata(metadata).then((data) => {
            const apiResponse = data[0];
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=snapshot
    // Snapshot:
    subscription.snapshot('my-snapshot');
}

///////////////////////////////////////////////////////////////////////////////
// TOPIC
///////////////////////////////////////////////////////////////////////////////
{
    const pubsub = PubSub();
    const topic = pubsub.topic('my-topic');

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=create
    // Create:
    topic.create((err, topic, apiResponse) => {
        if (!err) {
            // The topic was created successfully.
        }
    });
    // If the callback is omitted, we'll return a Promise.
    topic.create().then((data) => {
        const topic = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=createSubscription
    {
        const callback: PubSub.Topic.CreateSubscriptionCallback = (err, subscription, apiResponse) => { };

        // Without specifying any options.
        topic.createSubscription('newMessages', callback);

        // With options.
        // Note: ackDeadline not documented, so we use a different option
        topic.createSubscription('newMessages', {
            // ackDeadline: 90000 // 90 seconds
            retainAckedMessages: true,
        }, callback);

        // If the callback is omitted, we'll return a Promise.
        topic.createSubscription('newMessages').then((data) => {
            const subscription = data[0];
            const apiResponse = data[1];
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=delete
    // Delete:
    topic.delete((err, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    topic.delete().then((data) => {
        const apiResponse = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=exists
    // Exists:
    topic.exists((err, exists) => { });
    // If the callback is omitted, we'll return a Promise.
    topic.exists().then((data) => {
        const exists = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=get
    // Get:
    topic.get((err, topic, apiResponse) => {
        // The `topic` data has been populated.
    });
    // If the callback is omitted, we'll return a Promise.
    topic.get().then((data) => {
        const topic = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=getMetadata
    // Get metadata
    topic.getMetadata((err, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    topic.getMetadata().then((data) => {
        const apiResponse = data[0];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=getSubscriptions
    // Get subscriptions:
    // Note: Modified so that the callback is a constant
    {
        const callback: PubSub.Topic.GetSubscriptionsCallback = (err, subscriptions) => {
            // subscriptions is an array of `Subscription` objects.
        };

        topic.getSubscriptions(callback);

        // Customize the query.
        topic.getSubscriptions({
            pageSize: 3
        }, callback);

        // If the callback is omitted, we'll return a Promise.
        topic.getSubscriptions().then((data) => {
            const subscriptions = data[0];
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=getSubscriptionsStream
    // Get subscriptions stream:
    topic.getSubscriptionsStream()
        .on('error', console.error)
        .on('data', (subscription) => {
            // subscription is a Subscription object.
        })
        .on('end', () => {
            // All subscriptions retrieved.
        });
    // If you anticipate many results, you can end a stream early to prevent unnecessary processing and API requests.
    {
        const stream = topic.getSubscriptionsStream();
        stream.on('data', (subscription) => {
            stream.end();
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=publisher
    topic.publisher().publish(new Buffer('Hello, world!'), (err, messageId) => {
        if (err) {
            // Error handling omitted.
        }
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=subscription
    // Register a listener for `message` events.
    topic.subscription('my-subscription').on('message', (message) => {
        // Called every time a message is received.
        // message.id = ID of the message.
        // message.ackId = ID used to acknowledge the message receival.
        // message.data = Contents of the message.
        // message.attributes = Attributes of the message.
        // message.publishTime = Timestamp when Pub/Sub received the message.
    });
}

///////////////////////////////////////////////////////////////////////////////
// IAM
///////////////////////////////////////////////////////////////////////////////
{
    const pubsub = PubSub();
    const topic = pubsub.topic('my-topic');
    const subscription = topic.subscription('my-subscription');

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=iam.getPolicy
    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=iam.getPolicy
    // Get policy:
    topic.iam.getPolicy((err, policy, apiResponse) => { });
    subscription.iam.getPolicy((err, policy, apiResponse) => { });
    // If the callback is omitted, we'll return a Promise.
    topic.iam.getPolicy().then((data) => {
        const policy = data[0];
        const apiResponse = data[1];
    });

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=iam.setPolicy
    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=iam.setPolicy
    {
        const myPolicy = {
            bindings: [
                {
                    role: 'roles/pubsub.subscriber',
                    members: ['serviceAccount:myotherproject@appspot.gserviceaccount.com']
                }
            ]
        };

        // Set policy:
        topic.iam.setPolicy(myPolicy, (err, policy, apiResponse) => { });
        subscription.iam.setPolicy(myPolicy, (err, policy, apiResponse) => { });

        // If the callback is omitted, we'll return a Promise.
        topic.iam.setPolicy(myPolicy).then((data) => {
            const policy = data[0];
            const apiResponse = data[1];
        });
    }

    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/subscription?method=iam.testPermissions
    // https://googlecloudplatform.github.io/google-cloud-node/#/docs/pubsub/0.14.1/pubsub/topic?method=iam.testPermissions
    {
        const test = 'pubsub.topics.update';

        // Test permission
        topic.iam.testPermissions(test, (err, permissions, apiResponse) => {
            console.log(permissions);
            // {
            //   "pubsub.topics.update": true
            // }
        });

        // Test several permissions at once.
        const tests = [
            'pubsub.subscriptions.consume',
            'pubsub.subscriptions.update'
        ];

        subscription.iam.testPermissions(tests, (err, permissions) => {
            console.log(permissions);
            // {
            //   "pubsub.subscriptions.consume": true,
            //   "pubsub.subscriptions.update": false
            // }
        });

        // If the callback is omitted, we'll return a Promise.
        topic.iam.testPermissions(test).then((data) => {
            const permissions = data[0];
            const apiResponse = data[1];
        });
    }
}
