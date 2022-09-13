/// Tests are taken from the PubSubJs Basic Examples https://github.com/mroderick/PubSubJS
function test_Subscribe() {
    // create a function to receive messages
    var mySubscriber = (msg: PubSubJS.Message, data: any) => {
        console.log(msg, data);
    };

    // add the function to the list of subscribers for a particular message
    // we're keeping the returned token, in order to be able to unsubscribe
    // from the message later on
    var token = PubSub.subscribe('MY MESSAGE', mySubscriber);

    // publish a message asyncronously
    PubSub.publish('MY MESSAGE', 'hello world!');

    // publish a message syncronously, which is faster in some environments,
    // but will get confusing when one message triggers new messages in the
    // same execution chain
    // USE WITH CAUTION, HERE BE DRAGONS!!!
    PubSub.publishSync('MY MESSAGE', 'hello world!');
}

function test_unsubscribe_by_token() {
    // create a function to receive messages
    var mySubscriber = (msg: PubSubJS.Message, data: any) => {
        console.log(msg, data);
    };

    // add the function to the list of subscribers to a particular message
    // we're keeping the returned token, in order to be able to unsubscribe
    // from the message later on
    var token = PubSub.subscribe('MY MESSAGE', mySubscriber);

    // unsubscribe from further messages
    PubSub.unsubscribe(token);
}

function test_unsubcribe_by_function() {
    // create a function to receive the message
    var mySubscriber = (msg: PubSubJS.Message, data: any) => {
        console.log(msg, data);
    };

    // add the function to the list of subscribers to a particular message
    // we're keeping the returned token, in order to be able to unsubscribe
    // from the message later on
    var token = PubSub.subscribe('MY MESSAGE', mySubscriber);

    // unsubscribe mySubscriber from ALL further messages
    PubSub.unsubscribe(mySubscriber);
}

function test_Hierarchical_addressing() {
    // create a subscriber to receive all messages from a hierarchy of topics
    var myToplevelSubscriber = (msg: PubSubJS.Message, data: any) => {
        console.log('top level: ', msg, data);
    };

    // subscribe to all topics in the 'car' hierarchy
    PubSub.subscribe('car', myToplevelSubscriber);

    // create a subscriber to receive only leaf message from hierarchy op topics
    var mySpecificSubscriber = (msg: PubSubJS.Message, data: any) => {
        console.log('specific: ', msg, data);
    };

    // subscribe only to 'car.drive' topics
    PubSub.subscribe('car.drive', mySpecificSubscriber);

    // Publish some topics
    PubSub.publish('car.purchase', { name: 'my new car' });
    PubSub.publish('car.drive', { speed: '14' });
    PubSub.publish('car.sell', { newOwner: 'someone else' });

    // In this scenario, myToplevelSubscriber will be called for all
    // topics, three times in total
    // But, mySpecificSubscriber will only be called once, as it only
    // subscribes to the 'car.drive' topic
}

function ClearAllSubscriptions() {
    // create a function to receive messages
    var mySubscriber = (msg: PubSubJS.Message, data: any) => {
        console.log(msg, data);
    };

    // create two subscriptions
    PubSub.subscribe('topic1', mySubscriber);
    PubSub.subscribe('topic2', mySubscriber);

    // unsubscribe from all subscrpitions
    PubSub.clearAllSubscriptions();
}

function testStringMessage() {
    PubSub.subscribe('car', (msg: string, data: any) => {
        console.log('top level: ', msg, data);
    });
}

function test_generics_1() {
    const login = Symbol('LOGIN');

    const pubsub: PubSubJS.Base<number> = PubSub;

    pubsub.subscribe(login, (msg, data) => {});

    pubsub.publish(login, 123);
}

function test_generics_2() {
    const login: PubSubJS.Base<number, 'login'> = PubSub;

    login.subscribe('login', (msg, data) => {});

    login.publish('login', 123);
}

function test_generics_3() {
    const login = Symbol('LOGIN');

    const pubsub: PubSubJS.Base<number, symbol> = PubSub;

    pubsub.subscribe(login, (msg, data) => {});

    pubsub.publish(login, 123);
}
