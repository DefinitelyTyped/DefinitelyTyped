/**
 * Converted from:
 *  <https://github.com/matrix-org/matrix-js-sdk/blob/develop/examples/node/app.js>
 *
 * Huan <zixia@zixia.net> Feb 2020
 */
import sdk, { MatrixEvent } from 'matrix-js-sdk';

const myUserId      = "@example:localhost";
const myAccessToken = "QGV4YW1wbGU6bG9jYWxob3N0.qPEvLuYfNBjxikiCjP";

// $ExpectType MatrixClient
const matrixClient = sdk.createClient({
    baseUrl: "http://localhost:8008",
    accessToken: myAccessToken,
    userId: myUserId,
});

matrixClient.startClient(10);  // messages for each room.

// $ExpectType Promise<SearchResponse>
matrixClient
    .search({
        body: {
            search_categories: {
                room_events: {
                    search_term: 'test',
                    keys: ['content.body', 'content.name'],
                    event_context: {
                        before_limit: 10,
                        after_limit: 10,
                        include_profile: true,
                    },
                }
            }
        }
    });

matrixClient.redactEvent('testRoomId', 'eventId', '', { reason: 'just because' });  // $ExpectType Promise<any>
const [user] = matrixClient.getUsers();  // $ExpectType User[]
if (user) {
    matrixClient.getStoredDevicesForUser(user.userId);  // $ExpectType Promise<CryptoDeviceInfo[]>
}
const [room] = matrixClient.getRooms(); // $ExpectType Room[]
if (room) {
    const eventTimelineSet = room.getUnfilteredTimelineSet();  // $ExpectType EventTimelineSet
    const [event] = room.timeline;
    if (event) {
        event.getPushActions();  // $ExpectType PushAction[]
        event.status;  // $ExpectType EventStatus
        event.getUnsigned();  // $ExpectType any
        event.isRedacted();  // $ExpectType boolean
        event.isRedaction();  // $ExpectType boolean
        event.getContent(); // $ExpectType EventContentTypeMessage
    }
    eventTimelineSet.getTimelines();  // $ExpectType EventTimeline[]
    const timelineWindow = new sdk.TimelineWindow(matrixClient, eventTimelineSet);  // $ExpectType TimelineWindow
    timelineWindow.load();  // $ExpectType Promise<void>
    timelineWindow.getTimelineIndex(sdk.EventTimeline.BACKWARDS);  // $ExpectType TimelineIndex | null
}
matrixClient.store.getGroups();  // $ExpectType Group[]
matrixClient.getScheduler();  // $ExpectType MatrixScheduler | null
matrixClient.store.getRoomSummaries();  // $ExpectType RoomSummary[]

interface CustomEventContent {
    data: string;
}
const customEvent = new MatrixEvent<CustomEventContent, 'com.custom.type'>({
    content: {
        data: "data string",
    },
    origin_server_ts: 0,
    sender: "senderid",
    type: "com.custom.type",
    room_id: "",
    event_id: "",
});
customEvent.getContent(); // $ExpectType CustomEventContent

const customEventNameEvent = new MatrixEvent<{}, 'com.custom.type'>({
    content: "data string",
    origin_server_ts: 0,
    sender: "senderid",
    type: "com.custom.type",
    room_id: "",
    event_id: "",
});
customEventNameEvent.getType(); // $ExpectType "com.custom.type"
