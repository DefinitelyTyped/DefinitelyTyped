/// <reference path="jquery.postMessage.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

function test_postMessage() {
    // post plain message
    $.postMessage('test message', 'http://dummy.url/', parent);

    // post object message
    $.postMessage({
        'a': '1',
        'b': '2'
    }, 'http://dummy.url/', parent);
};

function test_receiveMessage() {
    // receive plain source origin
    $.receiveMessage((e) => {
        // e is an instance of MessageEvent
        console.log(e.data);
        console.log(e.source);
        console.log(e.origin);
    }, 'http://dummy.url');

    // receive source origin callback
    $.receiveMessage((e) => {}, (sourceOrigin) => {
        return sourceOrigin === 'http://dummy.url';
    }, 100);
};
