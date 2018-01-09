import Ember from 'ember';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';
import { assertType } from "./lib/assert";

assertType<string[]>(Ember.run.queues);

function testRun() {
    let r = run(function() {
        // code to be executed within a RunLoop
        return 123;
    });
    assertType<number>(r);

    function destroyApp(application: Ember.Application) {
        Ember.run(application, 'destroy');
        run(application, function() {
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

    let runNext = run.next(myContext, function() {
        // will not be executed
    });

    run.cancel(runNext);

    let runLater = run.later(myContext, function() {
        // will not be executed
    }, 500);

    run.cancel(runLater);

    let runScheduleOnce = run.scheduleOnce('afterRender', myContext, function() {
        // will not be executed
    });

    run.cancel(runScheduleOnce);

    let runOnce = run.once(myContext, function() {
        // will not be executed
    });

    run.cancel(runOnce);

    let throttle = run.throttle(myContext, function() {
        // will not be executed
    }, 1, false);

    run.cancel(throttle);

    let debounce = run.debounce(myContext, function() {
        // will not be executed
    }, 1);

    run.cancel(debounce);

    let debounceImmediate = run.debounce(myContext, function() {
        // will be executed since we passed in true (immediate)
    }, 100, true);

    // the 100ms delay until this method can be called again will be canceled
    run.cancel(debounceImmediate);
}

function testDebounce() {
    function runIt() {
    }

    let myContext = { name: 'debounce' };

    run.debounce(runIt, 150);
    run.debounce(myContext, runIt, 150);
    run.debounce(myContext, runIt, 150, true);

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
    run.begin();
    // code to be executed within a RunLoop
    run.end();
}

function testJoin() {
    run.join(function() {
        // creates a new run-loop
    });

    run(function() {
        // creates a new run-loop
        run.join(function() {
            // joins with the existing run-loop, and queues for invocation on
            // the existing run-loops action queue.
        });
    });

    new RSVP.Promise(function(resolve) {
        Ember.run.later(function() {
            resolve({ msg: 'Hold Your Horses' });
        }, 3000);
    });
}

function testLater() {
    const myContext = {};
    run.later(myContext, function() {
        // code here will execute within a RunLoop in about 500ms with this == myContext
    }, 500);
}

function testNext() {
    const myContext = {};
    run.next(myContext, function() {
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
            run.schedule('sync', this, function() {
                // this will be executed in the first RunLoop queue, when bindings are synced
                console.log('scheduled on sync queue');
            });

            run.schedule('actions', this, function() {
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
    run(function() {
        run.scheduleOnce('afterRender', myContext, sayHi);
        run.scheduleOnce('afterRender', myContext, sayHi);
        // sayHi will only be executed once, in the afterRender queue of the RunLoop
    });
    run.scheduleOnce('actions', myContext, function() {
        console.log('Closure');
    });
}

function testThrottle() {
    function runIt() {
    }

    let myContext = { name: 'throttle' };

    run.throttle(runIt, 150);
    run.throttle(myContext, runIt, 150);
}
