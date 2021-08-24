const fetchCopy: WindowOrWorkerGlobalScope['fetch'] = fetch;

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

const myInit: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    signal: new AbortSignal(),
};

const myRequest = new Request('flowers.jpg');

fetch(myRequest, myInit)
    .then(response => {
        console.log(response.type);
        console.log(response.url);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.statusText);
        console.log(response.headers);

        return response.blob();
    })
    .then(blob => {
        const init = { status: 200, statusText: 'SuperSmashingGreat!' };
        const myResponse = new Response(blob, init);
    });

const xmlRequest = new XMLHttpRequest();

xmlRequest.addEventListener('load', ev => {
    console.log(ev.lengthComputable);
    console.log(ev.loaded);
    console.log(ev.total);
});

const test = new URLSearchParams();

const url = new URL('path', 'http://localhost/');

const blobA = new Blob();
const textA = 'i \u2665 dogs';

const blob = new Blob([blobA, textA]);

const reader = new FileReader();

reader.onloadend = ev => {
    console.log(ev.target);
    console.log(ev.loaded);
};

reader.readAsText(new Blob());

fetch('https://example.org/post-image', {
    body: { uri: 'file:///data/tmp/qwerad3.jpg' },
    headers: {
        'Content-Type': 'type',
    },
    method: 'POST',
});

const socket = new WebSocket('wss://echo.websocket.org');
socket.send('hello world');
socket.addEventListener('open', () => console.log('open'));
socket.onopen = () => console.log('open');
socket.addEventListener('close', e => console.log(e.code));
socket.onclose = e => console.log(e.code);
socket.addEventListener('message', e => console.log(e.data));
socket.onmessage = e => console.log(e.data);
socket.addEventListener('error', e => console.log(e.message));
socket.onerror = e => console.log(e.message);
