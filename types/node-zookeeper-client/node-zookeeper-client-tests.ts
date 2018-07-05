import * as zookeeper from "node-zookeeper-client";

{
    const client = zookeeper.createClient('localhost:2181');
    const path = process.argv[2];

    client.once('connected', () => {
        console.log('Connected to the server.');

        client.create(path, error => {
            if (error) {
                console.log('Failed to create node: %s due to: %s.', path, error);
            } else {
                console.log('Node: %s is successfully created.', path);
            }

            client.close();
        });
    });

    client.connect();
}

function listChildren(client: zookeeper.Client, path: string) {
    client.getChildren(
        path,
        event => {
            console.log('Got watcher event: %s', event);
            listChildren(client, path);
        },
        (error, children, stat) => {
            if (error) {
                console.log(
                    'Failed to list children of %s due to: %s.',
                    path,
                    error
                );
                return;
            }

            console.log('Children of %s are: %j.', path, children);
        }
    );
}

{
    const client = zookeeper.createClient('localhost:2181');
    const path = process.argv[2];

    client.once('connected', () => {
        console.log('Connected to ZooKeeper.');
        listChildren(client, path);
    });

    client.connect();
}

const client = zookeeper.createClient(
    'localhost:2181/test',
    { sessionTimeout: 10000 }
);

{
    client.create(
        '/test/demo',
        new Buffer('data'),
        zookeeper.CreateMode.EPHEMERAL,
        (error: Error, path) => {
            if (error) {
                console.log(error.stack);
                return;
            }

            console.log('Node: %s is created.', path);
        }
    );
}

{
    client.remove('/test/demo', -1, (error: Error) => {
        if (error) {
            console.log(error.stack);
            return;
        }

        console.log('Node is deleted.');
    });
}

{
    client.exists('/test/demo', (error: Error, stat) => {
        if (error) {
            console.log(error.stack);
            return;
        }

        if (stat) {
            console.log('Node exists.');
        } else {
            console.log('Node does not exist.');
        }
    });
}

{
    client.getChildren('/test/demo', (error: Error, children, stats) => {
        if (error) {
            console.log(error.stack);
            return;
        }

        console.log('Children are: %j.', children);
    });
}

{
    client.getData(
        '/test/demo',
        event => {
            console.log('Got event: %s.', event);
        },
        (error: Error, data, stat) => {
            if (error) {
                console.log(error.stack);
                return;
            }

            console.log('Got data: %s', data.toString('utf8'));
        }
    );
}

{
    client.setData('/test/demo', null, 2, (error: Error, stat) => {
        if (error) {
            console.log(error.stack);
            return;
        }

        console.log('Data is set.');
    });
}

{
    client.getACL('/test/demo', (error: Error, acls, stat) => {
        if (error) {
            console.log(error.stack);
            return;
        }

        console.log('ACL(s) are: %j', acls);
    });
}

{
    client.setACL(
        '/test/demo',
        [
            new zookeeper.ACL(
                zookeeper.Permission.ADMIN,
                new zookeeper.Id('ip', '127.0.0.1')
            )
        ],
        (error: Error, stat) => {
            if (error) {
                console.log(error.stack);
                return;
            }

            console.log('New ACL is set.');
        }
    );
}

{
    client.mkdirp('/test/demo/1/2/3', (error: Error, path) => {
        if (error) {
            console.log(error.stack);
            return;
        }

        console.log('Node: %s is created.', path);
    });
}

{
    client.addAuthInfo('ip', new Buffer('127.0.0.1'));
}

{
    const state = client.getState();
    console.log('Current state is: %s', state);
}

{
    const id = client.getSessionId();
    console.log('Session id is: %s', id.toString('hex'));
}

{
    client.getSessionPassword();
    client.getSessionTimeout();

    client.on('connected', () => {
        console.log('Client state is changed to connected.');
    });
    client.on('state', state => {
        if (state === zookeeper.State.SYNC_CONNECTED) {
            console.log('Client state is changed to connected.');
        }
    });
}

{
    client.once('connected', () => {
        client.transaction().
            create('/txn').
            create('/txn/1', new Buffer('transaction')).
            setData('/txn/1', new Buffer('test'), -1).
            check('/txn/1').
            remove('/txn/1', -1).
            remove('/txn').
            commit((error, results) => {
                if (error) {
                    console.log(
                        'Failed to execute the transaction: %s, results: %j',
                        error,
                        results
                    );

                    return;
                }

                console.log('Transaction completed.');
                client.close();
            });
    });
}

{
    client.create('/test/demo', (error, path) => {
        if (error) {
            if ((error as zookeeper.Exception).getCode() === zookeeper.Exception.NODE_EXISTS) {
                console.log('Node exists.');
            } else {
                console.log((error as Error).stack);
            }
            return;
        }

        console.log('Node: %s is created.', path);
    });
}

{
    new zookeeper.Event(zookeeper.Event.NODE_CREATED, 'test', '/test');
}

{
    new zookeeper.Exception(zookeeper.Exception.NO_NODE, 'test', zookeeper.Exception);
    new zookeeper.Exception(zookeeper.Exception.NO_NODE, 'test', '/test', zookeeper.Exception);
}
