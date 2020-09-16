import { run } from '@ember/runloop';
import EmberObject from '@ember/object';
import { Backburner, DebugInfo, QueueItem, DeferredActionQueues } from '@ember/runloop/-private/backburner';

run; // $ExpectType RunNamespace
run.queues; // $ExpectType EmberRunQueues[]
const queues: string[] = run.queues;

// It will be the responsibility of each consuming package that needs access to the backburner property
// to merge the private types in the public API.
declare module '@ember/runloop' {
  interface RunNamespace {
    backburner: Backburner;
  }
}

function testRun() {
    run(() => { // $ExpectType number
        // code to be executed within a RunLoop
        return 123;
    });

    // run(target, method)
    run({}, () => {
        // code to be executed within a RunLoop
        return 123;
    });

    // run(target, method, ...args)
    run(
        {},
        () => {
            // code to be executed within a RunLoop
            return 123;
        },
        () => {
            console.log('foo');
        },
        'bar',
        {}
    );

    function destroyApp(application: EmberObject) {
        run(application, 'destroy');
        run(application, function() {
            this.destroy();
        });
    }
}

function testBind() {
    EmberObject.extend({
        init() {
            const bound = run.bind(this, this.setupEditor);
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

    const runNext = run.next(myContext, () => {
        // will not be executed
    });

    run.cancel(runNext);

    const runLater = run.later(myContext, () => {
        // will not be executed
    }, 500);

    run.cancel(runLater);

    const runScheduleOnce = run.scheduleOnce('afterRender', myContext, () => {
        // will not be executed
    });

    run.cancel(runScheduleOnce);

    const runOnce = run.once(myContext, () => {
        // will not be executed
    });

    run.cancel(runOnce);

    const throttle = run.throttle(myContext, () => {
        // will not be executed
    }, 1, false);

    run.cancel(throttle);

    const debounce = run.debounce(myContext, () => {
        // will not be executed
    }, 1);

    run.cancel(debounce);

    const debounceImmediate = run.debounce(myContext, () => {
        // will be executed since we passed in true (immediate)
    }, 100, true);

    // the 100ms delay until this method can be called again will be canceled
    run.cancel(debounceImmediate);
}

function testDebounce() {
    function runIt() {
    }

    const myContext = { name: 'debounce' };

    run.debounce(runIt, 150);
    run.debounce(myContext, runIt, 150);
    run.debounce(myContext, runIt, 150, true);

    EmberObject.extend({
        searchValue: 'test',
        fetchResults(value: string) {},

        actions: {
            handleTyping() {
                // the fetchResults function is passed into the component from its parent
                run.debounce(this, this.get('fetchResults'), this.get('searchValue'), 250);
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
    run.join(() => {
        // creates a new run-loop
    });

    run(() => {
        // creates a new run-loop
        run.join(() => {
            // joins with the existing run-loop, and queues for invocation on
            // the existing run-loops action queue.
        });
    });

    run.later(() => {
        console.log({ msg: 'Hold Your Horses' });
    }, 3000);
}

function testLater() {
    const myContext = {};
    run.later(myContext, () => {
        // code here will execute within a RunLoop in about 500ms with this == myContext
    }, 500);
}

function testNext() {
    const myContext = {};
    run.next(myContext, () => {
        // code to be executed in the next run loop,
        // which will be scheduled after the current one
    });
    run.next(() => {
        // code to be executed in the next run loop,
        // which will be scheduled after the current one
    });
}

function testOnce() {
    EmberObject.extend({
        init() {
            run.once(this, 'processFullName');
        },

        processFullName() {
        }
    });
}

function testSchedule() {
    EmberObject.extend({
        init() {
            run.schedule('sync', this, () => {
                // this will be executed in the first RunLoop queue, when bindings are synced
                console.log('scheduled on sync queue');
            });

            run.schedule('actions', this, () => {
                // this will be executed in the 'actions' queue, after bindings have synced.
                console.log('scheduled on actions queue');
            });
        }
    });

    run.schedule('actions', () => {
        // Do more things
    });
}

function testScheduleOnce() {
    function sayHi() {
        console.log('hi');
    }

    const myContext = {};
    run(() => {
        run.scheduleOnce('afterRender', myContext, sayHi);
        run.scheduleOnce('afterRender', myContext, sayHi);
        // sayHi will only be executed once, in the afterRender queue of the RunLoop
    });
    run.scheduleOnce('actions', myContext, () => {
        console.log('Closure');
    });
}

function testThrottle() {
    function runIt() {
    }

    const myContext = { name: 'throttle' };

    run.throttle(runIt, 150);
    run.throttle(myContext, runIt, 150);
}

function testBackburner() {
  const debugInfo: DebugInfo = run.backburner.getDebugInfo();
  const queueItems: QueueItem[] = debugInfo.timers;
  const deferredActionQueues: DeferredActionQueues[] = debugInfo.instanceStack;
}
