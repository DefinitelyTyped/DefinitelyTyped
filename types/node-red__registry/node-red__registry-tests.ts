import registry = require('@node-red/registry');

function registryTests() {
    interface ExtendedNodeRedSettings extends registry.NodeAPISettingsWithData {
        myKey: string;
    }
    interface MyNodeProperties {
        defKey: string;
    }
    interface MyNodeCredentials {
        username: string;
        password: string;
    }
    interface MyNode extends registry.Node<MyNodeCredentials> {
        instanceKey: string;
    }
    interface MyNodeDef extends registry.NodeDef, MyNodeProperties {}

    function nodeAPITests(RED: registry.NodeAPI<ExtendedNodeRedSettings>) {
        // $ExpectType string
        RED.settings.myKey;
        // $ExpectType boolean | undefined
        RED.settings.verbose;
        // $ExpectError
        RED.settings.wrongKey;

        // tslint:disable-next-line:space-before-function-paren
        const nodeConstructor: registry.NodeConstructor<MyNode, MyNodeDef, MyNodeCredentials> = function (nodeDef) {
            RED.nodes.createNode(this, nodeDef);

            // $ExpectType string
            nodeDef.defKey;
            // $ExpectError
            nodeDef.wrongKey;

            // $ExpectType string
            this.credentials.password;
            // $ExpectType string
            this.credentials.username;
            // $ExpectError
            this.credentials.wrongKey;

            this.instanceKey = 'value';
            // $ExpectError
            this.instanceKey = 123;
            // $ExpectError
            this.wrongKey;

            const status: registry.NodeStatus = {
                text: 'status',
                fill: 'blue',
                shape: 'dot',
            };
            // $ExpectError
            status.fill = 'invalid-fill';
            // $ExpectError
            status.shape = 'invalid-shape';
            this.status(status);
            this.status({});

            this.context().set('key', 'value');
            this.context().set('key', 123);
            this.context().set('key', undefined);
            this.context().get('key');

            this.on('input', (msg, send, done) => {
                // $ExpectType string
                msg._msgid;

                // $ExpectType boolean
                this.metric();
                this.metric('eventname', msg, 10);
                this.log('log info');
                this.warn('log warn');
                this.error('log error');
                this.trace('log trace');
                this.debug('log debug');

                send(msg);
                done();

                done(new Error('error'));
            });

            this.on('close', () => {});

            this.receive({});

            // $ExpectType Node<{}>
            RED.nodes.getNode('node-id');

            // RED.util covered in @node-red/util
            // just check the link
            // $ExpectType Util
            RED.util;

            // $ExpectType Express
            RED.httpNode;
            // $ExpectType Express
            RED.httpAdmin;
            // $ExpectType Server
            RED.server;

            // $ExpectType string
            RED._('myNode.label');
            // $ExpectType string
            RED._('myNode.status', { num: 10 });
        };

        RED.nodes.registerType('my-node', nodeConstructor);
    }
}
