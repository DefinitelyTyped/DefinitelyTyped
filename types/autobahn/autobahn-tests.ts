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

    connection.open();
}
