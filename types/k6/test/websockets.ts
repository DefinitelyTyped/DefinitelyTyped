import { WebSocket } from 'k6/experimental/websockets';

//
// WebSocket constructor
//

const ws = new WebSocket('wss://test-api.k6.io/ws/crocochat/1');

//
// WebSocket.send
//

// @ts-expect-error
ws.send();

// @ts-expect-error
ws.send(5);

//
// WebSocket.addEventListener
//

// @ts-expect-error
ws.addEventListener();

// @ts-expect-error
ws.addEventListener('open');

// @ts-expect-error
ws.addEventListener('open', 5);

//
// WebSocket.close
//

// @ts-expect-error
ws.close(5);
