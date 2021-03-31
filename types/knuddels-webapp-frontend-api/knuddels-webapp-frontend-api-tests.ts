import { KnuddelsEvent } from 'knuddels-webapp-frontend-api';

const json = {
    someString: "someValue",
    someNumber: 1337,
    someBoolean: true,
    someArray: [
        "abc",
        1337,
        false
    ],
    someObject: {
        anotherKey: "string",
    },
};
const color = Client.Color.fromRGB(255, 255, 255);
const isOffline = Client.getClientType() === ClientType.Offline;
if (isOffline) {
    console.log('test-user is offline');
}
Client.getHostFrame().setTitle("test");
Client.getHostFrame().focus();
Client.getHostFrame().setBackgroundColor(color, 1337);
Client.addEventListener("test", () => {});
Client.addEventListener("test", (event: {type: string, data: KnuddelsEvent}) => {
    const evtInfo = event.type + event.data;
    console.log(`addEventListener called with ${evtInfo}`);
});
Client.removeEventListener("test");
const connectionTypeChangeListener = (type: string) => {
    const evtInfo = "abc" + type;
    console.log(`connectionTypeChangeListener called with ${evtInfo}`);
};
Client.sendEvent("test", json);
Client.sendEvent("test", Client.pageData);
Client.dispatchEvent(new Client.Event("test", json));
Client.addConnectionTypeChangeListener(connectionTypeChangeListener);
Client.removeConnectionTypeChangeListener(connectionTypeChangeListener);
Client.getDirectConnection().then(() => {});
