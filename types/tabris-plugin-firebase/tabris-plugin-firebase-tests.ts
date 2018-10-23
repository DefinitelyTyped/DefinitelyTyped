function testAnalytics() {
    // Properties
    let analyticsCollectionEnabled: boolean;
    let screenName: string;
    let userId: string;

    analyticsCollectionEnabled = firebase.Analytics.analyticsCollectionEnabled;
    screenName = firebase.Analytics.screenName;
    userId = firebase.Analytics.userId;

    firebase.Analytics.analyticsCollectionEnabled = analyticsCollectionEnabled;
    firebase.Analytics.screenName = screenName;
    firebase.Analytics.userId = userId;

    const properties: firebase.AnalyticsProperties = {analyticsCollectionEnabled, screenName, userId};
    const partialProperties: firebase.AnalyticsProperties = {};
    firebase.Analytics.set(properties);
    firebase.Analytics.set(partialProperties);

    // Methods
    let thisReturnValue: firebase.Analytics;
    const name = '';
    const property = '';

    thisReturnValue = firebase.Analytics.set({analyticsCollectionEnabled, screenName, userId});
    firebase.Analytics.logEvent(name, {foo: property});
    firebase.Analytics.logEvent(name);
    firebase.Analytics.setUserProperty(name, property);
}

function testMessaging() {
    // Properties
    let instanceId: string;
    let token: string;
    let launchData: object;

    instanceId = firebase.Messaging.instanceId;
    token = firebase.Messaging.token;
    launchData = firebase.Messaging.launchData;

    // Methods
    firebase.Messaging.resetInstanceId();

    // Events
    const target: firebase.Messaging = firebase.Messaging;
    const timeStamp = 0;
    const type = 'foo';
    const value = 'bar';
    const data: any = {};

    const instanceIdChangedEvent: PropertyChangedEvent<firebase.Messaging, string> = {target, timeStamp, type, value};
    const tokenChangedEvent: PropertyChangedEvent<firebase.Messaging, string> = {target, timeStamp, type, value};
    const messageEvent: firebase.MessageEvent = {target, timeStamp, type, data};

    firebase.Messaging.on({
        instanceIdChanged: (event: PropertyChangedEvent<firebase.Messaging, string>) => {},
        tokenChanged: (event: PropertyChangedEvent<firebase.Messaging, string>) => {},
        message: (event: firebase.MessageEvent) => {}
    });
}

interface PropertyChangedEvent<T, U> {
    readonly target: T;
    readonly timeStamp: number;
    readonly type: string;
    readonly value: U;
}
