///<reference path='eventemitter3.d.ts' />
'use strict';

import EventEmitter = require('eventemitter3');

class EventEmitterTest {
    v: EventEmitter;

    constructor() {
        this.v = new EventEmitter();
        this.v = new EventEmitter.EventEmitter();
        this.v = new EventEmitter.EventEmitter2();
        this.v = new EventEmitter.EventEmitter3();
    }

    listeners() {
        var v1: Function[] = this.v.listeners('click');
    }

    emit() {
        var v1: boolean = this.v.emit('click');
        var v2: boolean = this.v.emit('click', 1);
        var v3: boolean = this.v.emit('click', 1, '1');
        var v4: boolean = this.v.emit('click', 1, '1', true);
        var v5: boolean = this.v.emit('click', 1, '1', true, new Date());
    }

    on() {
        var fn = () => console.log(1);
        var v1: EventEmitter = this.v.on('click', fn);
        var v2: EventEmitter = this.v.on('click', fn, this);
    }

    once() {
        var fn = () => console.log(1);
        var v1: EventEmitter = this.v.once('click', fn);
        var v2: EventEmitter = this.v.once('click', fn, this);
    }

    removeListener() {
        var fn = () => console.log(1);
        var v1: EventEmitter = this.v.removeListener('click', fn);
        var v2: EventEmitter = this.v.removeListener('click', fn, true);
    }

    removeAllListeners() {
        var v1: EventEmitter = this.v.removeAllListeners('click');
    }

    off() {
        var fn = () => console.log(1);
        var v1: EventEmitter = this.v.off('click', fn);
        var v2: EventEmitter = this.v.off('click', fn, true);
    }

    addListener() {
        var fn = () => console.log(1);
        var v1: EventEmitter = this.v.addListener('click', fn);
        var v2: EventEmitter = this.v.addListener('click', fn, this);
    }

    setMaxListeners() {
        var v1: EventEmitter = this.v.setMaxListeners();
    }
}
