import KeenTracking from "keen-tracking";

// $ExpectType KeenTracking
let tc = new KeenTracking({
    projectId: "xpto",
    writeKey: "XPTOQWEKASDKASD",
});

// $ExpectType KeenTracking
tc = new KeenTracking({
    projectId: "xpto",
    writeKey: "XPTOQWEKASDKASD",
    requestType: "beacon",
});

// $ExpectType Promise<{ created: boolean; }>
tc.recordEvent("my_collection", { a: "xxx", b: 123 });

// $ExpectType Promise<{ [collectionName: string]: boolean[]; }>
tc.recordEvents({
    my_collection_1: [
        { a: "aaa", b: 111 },
        { a: "bbb", b: 222 },
    ],
    my_collection_2: [
        { x: 1.0, y: { z: "ok" } },
        { x: 2.0, y: { z: "ko" } },
    ],
});

// $ExpectType KeenClient
tc.extendEvents({
    my_collection_3: {
        x: 2.2,
        y: 3.3,
    },
});

// $ExpectType KeenClient
tc.initAutoTracking({
    recordPageViews: true,
});
