import { KnuddelsEvent } from './index';

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
const same = Client.getClientType() === ClientType.Offline;
Client.getHostFrame().setTitle("test");
Client.getHostFrame().focus();
Client.getHostFrame().setBackgroundColor(color, 1337);
Client.addEventListener("test", () => {})
Client.addEventListener("test", (event: {type: string, data: KnuddelsEvent}) => {
    const x = event.type + event.data
});
Client.removeEventListener("test");
const connectionTypeChangeListener = (type: string) => {
    const x = "abc" + type;
};
Client.sendEvent("test", json);
Client.sendEvent("test", Client.pageData);
Client.dispatchEvent(new Client.Event("test", json));
Client.addConnectionTypeChangeListener(connectionTypeChangeListener);
Client.removeConnectionTypeChangeListener(connectionTypeChangeListener);
Client.getDirectConnection().then(() => {});
