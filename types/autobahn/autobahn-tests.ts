import autobahn = require("autobahn");

class MyClass {
    add2Count: number = 0;
    session: autobahn.Session;

    constructor(session: autobahn.Session) {
        this.session = session;
    }

    add2(args: Array<number>): number {
        this.add2Count++;
        return args[0] + args[1];
    }

    onEvent(args: Array<any>): void {
        console.log("Event:", args[0]);
    }
}

function test_client() {
    var options: autobahn.IConnectionOptions =
        { url: 'ws://127.0.0.1:8080/ws', realm: 'realm1' };

    var connection = new autobahn.Connection(options);

    connection.onopen = session => {
        var myInstance = new MyClass(session);

        // 1) subscribe to a topic
        session.subscribe('com.myapp.hello', myInstance.onEvent);

        // 2) publish an event
        session.publish('com.myapp.hello', ['Hello, world!']);

        // 3) register a procedure for remoting
        session.register('com.myapp.add2', myInstance.add2, { invoke: 'roundrobin' });

        // 4) call a remote procedure
        session.call<number>('com.myapp.add2', [2, 3]).then(
            res => {
                console.log("Result:", res);
            });
    };

    if (!connection.isOpen && !connection.isRetrying && connection.session == null) {
        connection.open();
    }

    var { isConnected, transport: { info: { protocol, type, url } }, defer } = connection;
    console.log(isConnected, protocol, type, url, defer);
}

function test_custom_transport_factory() {
    autobahn.transports.register('custom', CustomTransportFactory)
    
    var CustomFactoryFactory = autobahn.transports.get('');
    var customFactory = new CustomFactoryFactory({});
    var customTransport = customFactory.create()
    console.log(customTransport.info);
}

class CustomTransportFactory {
    create(): autobahn.ITransport {
        return {
            onopen() {},
            onmessage(message: any[]) {},
            onclose(details: autobahn.ICloseEventDetails) {},
            send(message: any[]) {},
            close(errorCode: number, reason?: string) {},
            info: {type: 'custom'}
        };
    }

    type: autobahn.TransportType = 'custom'
}
