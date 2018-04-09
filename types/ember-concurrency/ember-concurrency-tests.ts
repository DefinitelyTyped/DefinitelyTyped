import 'jquery';
import {
    task,
    timeout,
    waitForEvent,
    taskGroup,
    waitForProperty,
    waitForQueue
} from 'ember-concurrency';
import Ember from 'ember';
import Controller from '@ember/controller';

Ember.Component.extend({
  loopingTask: task(function *(this: Ember.Component) {
    while (true) {
      this.set<any, any>('num', Math.random());
      yield timeout(100);
    }
  }).on('init')
});

Ember.Component.extend({
    myTask: task(function *(this: any) {
        const clickEvent = yield waitForEvent($('body'), 'click');
        const emberEvent = yield waitForEvent(this, 'foo');
        // somewhere else: component.trigger('foo', { value: 123 });
    })
});

Ember.Component.extend({
    myTask: task(function *() {
        console.log("Pausing for a second...");
        yield timeout(1000);
        console.log("Done!");
    })
});
function* taskFn() { yield 1; }

Controller.extend({
    chores: taskGroup().drop(),

    mowLawn:       task(taskFn).group('chores'),
    doDishes:      task(taskFn).group('chores'),
    changeDiapers: task(taskFn).group('chores')
});

Ember.Component.extend({
    myTask: task(function *() {
        while (true) {
            console.log("Hello!");
            yield timeout(1000);
        }
    })
});

Ember.Component.extend({
    myTask: task(function *(this: Ember.Evented) {
        console.log("Please click anywhere..");
        const clickEvent = yield waitForEvent($('body'), 'click');
        console.log("Got event", clickEvent);

        const emberEvent = yield waitForEvent(this, 'foo');
        console.log("Got foo event", emberEvent);

        // somewhere else: component.trigger('foo', { value: 123 });
    })
});

Ember.Component.extend({
    foo: 0,

    myTask: task(function *(this: any) {
        console.log("Waiting for `foo` to become 5");

        yield waitForProperty(this, 'foo', v => v === 5);

        // somewhere else: this.set('foo', 5)

        console.log("`foo` is 5!");
    })
});

Ember.Component.extend({
    myTask: task(function *() {
        yield waitForQueue('afterRender');
        console.log("now we're in the afterRender queue");
    })
});
