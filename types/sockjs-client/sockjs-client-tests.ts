

import * as SockJS from 'sockjs-client';

let sockJs: any;

sockJs = new SockJS('url');
sockJs = SockJS('url');
sockJs = SockJS('url', null, {
  server: '1233445',
  sessionId: 23,
  transports: 'websocket'
});
sockJs = SockJS('url', null, {
  sessionId: () => 'SID',
  transports: ['websocket', 'eventsource']
});

let listener = (e: any) => e;
let listenerObj = {
  handleEvent: (e: any) => e
};

sockJs.addEventListener('onopen', listener);
sockJs.addEventListener('onclose', listener, true);
sockJs.addEventListener('onopen', listenerObj);
sockJs.addEventListener('onclose', listenerObj, true);

sockJs.removeEventListener('onopen', listener);
sockJs.removeEventListener('onclose', listener, true);
sockJs.removeEventListener('onopen', listenerObj);
sockJs.removeEventListener('onclose', listenerObj, true);

sockJs.onopen = (e: any) => console.log(e);
sockJs.onmessage = (e: any) => console.log(e.data);
sockJs.onclose = (e: any) => console.log(e.code, e.reason, e.wasClean);

let testStates = SockJS.CONNECTING !== -1 && SockJS.OPEN !== -1 &&
                  SockJS.CLOSING !== -1 && SockJS.CLOSED !== -1;

sockJs.send('send');
sockJs.send({x: 1});

sockJs.close(100, 'reason');
sockJs.close(200);
sockJs.close();
