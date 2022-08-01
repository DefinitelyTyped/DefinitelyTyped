import autobahn = require('autobahn');

class MyClass {
    add2Count: number = 0;
    session: autobahn.Session;

    constructor(session: autobahn.Session) {
        this.session = session;
    }

    add2(args: [number, number]): number {
        this.add2Count++;
        return args[0] + args[1];
    }

    doGreeting(_args: [], kwArgs: { greeting: string; who: string }): string {
        return `${kwArgs.greeting} ${kwArgs.who}`;
    }

    onEvent(args: [string]): void {
        console.log('Event:', args[0]);
    }

    onEventTwo(args: [string]): void {
        console.log('Event 2:', args[0]);
    }
}

function test_client() {
    var options: autobahn.IConnectionOptions = { url: 'ws://127.0.0.1:8080/ws', realm: 'realm1' };

    var connection = new autobahn.Connection(options);

    connection.onopen = session => {
        var myInstance = new MyClass(session);

        // 1) subscribe to a topic
        const fixedHelloSubscription = session.subscribe('com.myapp.hello', myInstance.onEvent);
        // 1a) subscribe to a topic, while ensuring that a different handler would be able to pick it up
        const randomHelloSubscription = session.subscribe<[string]>(
            'com.myapp.hello2',
            Math.random() < 0.5 ? myInstance.onEvent : myInstance.onEventTwo,
        );

        // 2) publish an event
        session.publish('com.myapp.hello', ['Hello, world!']);

        // 2a) public an event that should be type safe for the receiver
        session.publish<Parameters<typeof myInstance.onEvent>[0]>('com.myapp.hello', ['Hello, world!']);
        session.publish<[string]>('com.myapp.hello2', ['Hello, world!']);

        // 3) register a procedure for remoting
        const add2reg = session.register('com.myapp.add2', myInstance.add2, { invoke: 'roundrobin' });
        const doGreetingReg = session.register('com.myapp.doGreeting', myInstance.doGreeting, { invoke: 'roundrobin' });

        // 4) call a remote procedure
        session.call<number>('com.myapp.add2', [2, 3]).then(res => {
            console.log('Result:', res);
        });
        session.call<string>('com.myapp.add2', [], { greeting: 'hello', who: 'world' }).then(res => {
            console.log('Result:', res);
        });

        // 4a) call a remote procedure that should be type safe for the receiver
        session
            .call<ReturnType<typeof myInstance.add2>, Parameters<typeof myInstance.add2>[0]>('com.myapp.add2', [2, 3])
            .then(res => {
                console.log('Result:', res);
            });
        session
            .call<
                ReturnType<typeof myInstance.doGreeting>,
                Parameters<typeof myInstance.doGreeting>[0],
                Parameters<typeof myInstance.doGreeting>[1]
            >('com.myapp.add2', [], { greeting: 'hello', who: 'world' })
            .then(res => {
                console.log('Result:', res);
            });

        // 5) unsubscribe
        fixedHelloSubscription.then(sub => {
            return sub.unsubscribe();
        });
        randomHelloSubscription.then(sub => {
            session.unsubscribe(sub);
        });

        // 6) unregister
        add2reg.then(reg => {
            reg.unregister();
        });
        doGreetingReg.then(reg => {
            session.unregister(reg);
        });
    };

    if (!connection.isOpen && !connection.isRetrying && connection.session == null) {
        connection.open();
    }

    var {
        isConnected,
        transport: {
            info: { protocol, type, url },
        },
        defer,
    } = connection;
    console.log(isConnected, protocol, type, url, defer);
}

function test_custom_transport_factory() {
    autobahn.transports.register('custom', CustomTransportFactory);

    var CustomFactoryFactory = autobahn.transports.get('');
    var customFactory = new CustomFactoryFactory({});
    var customTransport = customFactory.create();
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
            info: { type: 'custom' },
        };
    }

    type: autobahn.TransportType = 'custom';
}
