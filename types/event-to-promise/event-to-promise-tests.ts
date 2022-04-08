import { EventEmitter } from 'events'

import eventToPromise = require('event-to-promise');

{
    const ee = new EventEmitter()
    const ep = eventToPromise(ee, 'custom')

    ep.then(console.log)
    ee.emit('custom')
}

{
    const et = new EventTarget()
    const tp = eventToPromise.multi(et, ['custom'])

    tp.then(console.log)
    et.dispatchEvent(new Event('custom'))
}
