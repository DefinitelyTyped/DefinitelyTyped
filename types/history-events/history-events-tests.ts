import type { HistoryEvent } from 'history-events';
import historyEvents = require('history-events');

if (historyEvents.isHistorySupported()) {
    const handler = (ev: HistoryEvent) => {
        console.log(ev, 'fired');
        console.log('Event Name:', ev.eventName);
        console.log('State:', ev.state);
    };

    window.addEventListener('pushstate', handler);
    window.addEventListener('replacestate', handler);
    window.addEventListener('changestate', handler);

    window.onpushstate = () => console.log('pushstate fired');
    window.onreplacestate = () => console.log('replacestate fired');
    window.onchangestate = () => console.log('changestate fired');

    historyEvents.triggerEvent(window, 'pushstate', { foo: 'bar' });
    historyEvents.addEventListener(window, 'changestate', console.log);
    historyEvents.removeEventListener(window, 'changestate', console.log);
}
