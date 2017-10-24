import * as autobahn from "autobahn";
import { IWampEvent } from "rx.wamp";

function nodeJS(session: autobahn.Session) {
    var sessionObservable =
        Rx.Observable
            .fromConnection({ url: 'ws://localhost:9000', realm: 'realm1' });
}

function connection() {
    var connectionSubscription = Rx.Observable.fromConnection({ url: "ws://localhost:9000" })
        .subscribe(session => console.log("A new session was created"));

    //Close our current connection and don't retry
    connectionSubscription.dispose();
}

function subscribe_to_topics(session: autobahn.Session, options: autobahn.ISubscribeOptions) {
    var openObserver = Rx.Observer.create();

    // You may optionally pass in an observer to listen for the subscription completing
    var topic = Rx.Observable.subscribeAsObservable(session, "wamp.my.foo", options, openObserver);

    //Do all the normal reactive operations on it
    var topicSubscription = topic
        .filter(value => value.args && value.args.length > 1)
        .map(value => value.args[1])
        .subscribe(value => console.log(value));

    //Unsubscribe from topic, you will no longer receive updates from this topic
    topicSubscription.dispose();
}

function new_in_version3(onResult: Rx.Observer<autobahn.ISubscription>) {
    Rx.Observable.subscribeAsObservable(Rx.Observable.fromConnection({ url: "ws://myconnectionurl:9090" }), "wamp.my.foo", undefined, onResult);
}

function new_in_version5(fooObserver: Rx.Observer<IWampEvent>) {
    var connection = Rx.Observable.fromConnection({ url: "ws://myconnectionurl:9090" });

    //You can subscribe to as many items as you want
    var subscriber =
        Rx.Observable.subscriber(connection)
            .to("wamp.my.foo", {}, fooObserver)
            .to("wamp.my.other.foo", {}, function (message) { }, function (ex) { }, function () { });

    //You may cancel all of the items with one command as well
    subscriber.dispose();
}

function publishing_to_topic(session: autobahn.Session) {
    var published = Rx.Observable.publishAsObservable(session, "wamp.my.foo", [42], { key: "value" }, {});
}

function or_use_them_together(session: autobahn.Session, observer: Rx.Observer<IWampEvent>) {
    //Surfaces a subject which can do both publication and subscription
    var topic = Rx.Observable.fromPubSubPattern(session, "wamp.pubsub.topic", {});

    //When the topic successfully subscribes it is surfaced through the 'opened' property
    topic.opened.subscribe(() => console.log("subscribed to topic"));

    //Errors in publishing are surfaced through the 'errors' property
    topic.errors.subscribe(err => console.log("There was an error publishing the message"));

    //subscribe to the observer
    topic.subscribe(observer);

    //publish to the observer
    Rx.Observable.generateWithRelativeTime(0,
        x => x < 42,
        x => x + 1,
        x => ({ args: [x] }),
        x => 15)
        .subscribe(topic);
}

function registering_methods(session: autobahn.Session, endpoint: autobahn.RegisterEndpoint) {
    var registration =
        Rx.Observable
            .registerAsObservable(session, "wamp.my.add", endpoint, {})
            //This will bubble up all errors that occur either
            //during registration or unregistration.
            .subscribeOnError(e => {
                //This will get called for all errors.
            });

    //Unregister
    registration.dispose();
}

function new_in_version3_registration(myUrl: string, endpoint: autobahn.RegisterEndpoint) {
    var connection = Rx.Observable.fromConnection({ url: myUrl, realm: 'realm1' });

    Rx.Observable.registerAsObservable
        (connection, "wamp.my.add", (args, kwargs, details) => {
            if (args === undefined || args.length < 1)
                throw new autobahn.Error("No values to sum!");
            else if (args.length > 2) {
                throw new autobahn.Error("Too many values!");
            } else {
                return args[0] + args[1];
            }
        },
        {});
}

function calling_methods(session : autobahn.Session) {
    var caller = Rx.Observable.callAsObservable<number>(session, "wamp.my.add", {});

    var addResult =
        caller([2, 3], {})
        .subscribe(function (value) {
            // => 5
            console.log("Result was %s", value);
        });
}

function weather_station_monitor(session: autobahn.Session) {
    interface IWeather {
    }

    interface IWeatherReadings {
        warnings: {
            type: string,
            severity: string,
        }[],
        temperature: {
            average: number
        };
    }

    //listen for sensor readings
    var sensorReadings = Rx.Observable.subscribeAsObservable(session, "weather.sensor");

    //A remote service for analyzing our readings, it might be aggregating across several different sources
    var analyzer = Rx.Observable.callAsObservable<IWeatherReadings>(session, "weather.forecast.compute");

    //Home control settings
    var desiredTemperature = Rx.Observable.subscribeAsObservable(session, "temperature.indoors.desired")
        .map(x => <number>x.args[0]);

    var dailyForecast =
        sensorReadings
            .map(rawValue => <IWeather>rawValue.kwargs)
            .throttle(1000) // At most once every second
            .bufferWithTime(1000 * 60 * 60 * 24) //Milliseconds in a day
            .tap(readings => {
                //Send these off to our visualizer somewhere on the network
                Rx.Observable.publishAsObservable(session, "weather.visualizer.daily", readings);
            })
            .flatMap<IWeatherReadings>(readings => analyzer(readings))
            .publish().refCount();

    //Warn of inclement weather coming in
    dailyForecast
        //only get warnings
        .filter(weather => (weather.warnings.length > 0))
        .map(weather => {
            //remap only the first warning, don't know why, just cause
            var warning = weather.warnings[0];
            return { type: warning.type, severity: warning.severity, message: "GET TO DA CHOPPA!!" };
        })
        //Publish it to our klaxon service to warn everyone on the block
        .subscribe(Rx.Observable.publishAsObservable.bind(null, session, "weather.warnings.klaxon"));

    //Notify the climate control to turn off
    dailyForecast
        .map(weather => weather.temperature.average)
        .combineLatest(desiredTemperature, (actual, desired) => Math.abs(desired - actual))
        .map(difference => ({ state: difference > 4 }))
        .subscribe(Rx.Observable.publishAsObservable.bind(null, session, "indoor.climatecontrol.active"));

    //Create a pipeline of distributed computation
    var adder = Rx.Observable.callAsObservable<number>(session, "wamp.my.add");
    var multiplier = Rx.Observable.callAsObservable<number>(session, "wamp.my.multiply");

    //Somewhat contrived but you get the idea
    var pipeline =
        adder([2, 3])
            .zip(adder([3, 4]), (value1, value2) => [value1, value2])
            .flatMap(value => multiplier(value));

    pipeline.subscribe(value => {
        // =>  (2 + 3) * (3 + 4) = 35
        console.log("Result was %d", value);
    });
}
