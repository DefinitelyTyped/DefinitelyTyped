import 'node';

(et: EventTarget) => typeof et === 'object' && et.addEventListener;
(ev: Event) => typeof ev === 'object' && ev.type;
