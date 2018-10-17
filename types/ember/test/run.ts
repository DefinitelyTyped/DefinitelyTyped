import Ember from 'ember';
import RSVP from 'rsvp';
import { assertType } from "./lib/assert";

assertType<string[]>(Ember.run.queues);

function testRun() {
    const r = Ember.run(() => {
        // code to be executed within a RunLoop
        return 123;
    });
    assertType<number>(r);

    function destroyApp(application: Ember.Application) {
        Ember.run(application, 'destroy');
        Ember.run(application, function() {
            this.destroy();
        });
    }
}

function testBind() {
    Ember.Component.extend({
        init() {
            const bound = Ember.run.bind(this, this.setupEditor);
            bound();
        },

        editor: null as string | null,

        setupEditor(editor: string) {
            this.set('editor', editor);
        }
    });
}

function testCancel() {
    const myContext = {};

    const runNext = Ember.run.next(myContext, () => {
        // will not be executed
    });

    Ember.run.cancel(runNext);

    const runLater = Ember.run.later(myContext, () => {
        // will not be executed
    }, 500);

    Ember.run.cancel(runLater);

    const runScheduleOnce = Ember.run.scheduleOnce('afterRender', myContext, () => {
        // will not be executed
    });

    Ember.run.cancel(runScheduleOnce);

    const runOnce = Ember.run.once(myContext, () => {
        // will not be executed
    });

    Ember.run.cancel(runOnce);

    const throttle = Ember.run.throttle(myContext, () => {
        // will not be executed
    }, 1, false);

    Ember.run.cancel(throttle);

    const debounce = Ember.run.debounce(myContext, () => {
        // will not be executed
    }, 1);

    Ember.run.cancel(debounce);

    const debounceImmediate = Ember.run.debounce(myContext, () => {
        // will be executed since we passed in true (immediate)
    }, 100, true);

    // the 100ms delay until this method can be called again will be canceled
    Ember.run.cancel(debounceImmediate);
}

function testDebounce() {
    function runIt() {
    }

    const myContext = { name: 'debounce' };

    Ember.run.debounce(runIt, 150);
    Ember.run.debounce(myContext, runIt, 150);
    Ember.run.debounce(myContext, runIt, 150, true);

    Ember.Component.extend({
        searchValue: 'test',
        fetchResults(value: string) {},

        actions: {
            handleTyping() {
                // the fetchResults function is passed into the component from its parent
                Ember.run.debounce(this, this.get('fetchResults'), this.get('searchValue'), 250);
            }
        }
    });
}

function testBegin() {
    Ember.run.begin();
    // code to be executed within a RunLoop
    Ember.run.end();
}

function testJoin() {
    Ember.run.join(() => {
        // creates a new run-loop
    });

    Ember.run(() => {
        // creates a new run-loop
        Ember.run.join(() => {
            // joins with the existing run-loop, and queues for invocation on
            // the existing run-loops action queue.
        });
    });

    new RSVP.Promise((resolve) => {
        Ember.run.later(() => {
            resolve({ msg: 'Hold Your Horses' });
        }, 3000);
    });
}

function testLater() {
    const myContext = {};
    Ember.run.later(myContext, () => {
        // code here will execute within a RunLoop in about 500ms with this == myContext
    }, 500);
}

function testNext() {
    const myContext = {};
    Ember.run.next(myContext, () => {
        // code to be executed in the next run loop,
        // which will be scheduled after the current one
    });
}

function testOnce() {
    Ember.Component.extend({
        init() {
            Ember.run.once(this, 'processFullName');
        },

        processFullName() {
        }
    });
}

function testSchedule() {
    Ember.Component.extend({
        init() {
            Ember.run.schedule('sync', this, () => {
                // this will be executed in the first RunLoop queue, when bindings are synced
                console.log('scheduled on sync queue');
            });

            Ember.run.schedule('actions', this, () => {
                // this will be executed in the 'actions' queue, after bindings have synced.
                console.log('scheduled on actions queue');
            });
        }
    });

    Ember.run.schedule('actions', () => {
        // Do more things
    });
}

function testScheduleOnce() {
    function sayHi() {
        console.log('hi');
    }

    const myContext = {};
    Ember.run(() => {
        Ember.run.scheduleOnce('afterRender', myContext, sayHi);
        Ember.run.scheduleOnce('afterRender', myContext, sayHi);
        // sayHi will only be executed once, in the afterRender queue of the RunLoop
    });
    Ember.run.scheduleOnce('actions', myContext, () => {
        console.log('Closure');
    });
}

function testThrottle() {
    function runIt() {
    }

    const myContext = { name: 'throttle' };

    Ember.run.throttle(runIt, 150);
    Ember.run.throttle(myContext, runIt, 150);
}
