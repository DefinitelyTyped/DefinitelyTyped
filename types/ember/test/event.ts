import Ember from 'ember';

function testOn() {
    const Job = Ember.Object.extend({
        logCompleted: Ember.on('completed', () => {
            console.log('Job completed!');
        })
    });

    const job = Job.create();

    Ember.sendEvent(job, 'completed'); // Logs 'Job completed!'
}

function testEvented() {
    const Person = Ember.Object.extend(Ember.Evented, {
        greet() {
            this.trigger('greet');
        }
    });

    const person = Person.create();

    person.on('greet', () => {
        console.log('Our person has greeted');
    });

    person.on('greet', () => {
        console.log('Our person has greeted');
    }).one('greet', () => {
        console.log('Offer one-time special');
    }).off('event', {}, () => {});

    person.greet();
}

function testObserver() {
    Ember.Object.extend({
        valueObserver: Ember.observer('value', () => {
            // Executes whenever the "value" property changes
        })
    });
}

function testListener() {
    Ember.Component.extend({
        init() {
            Ember.addListener(this, 'willDestroyElement', this, 'willDestroyListener');
            Ember.addListener(this, 'willDestroyElement', this, 'willDestroyListener', true);
            Ember.addListener(this, 'willDestroyElement', this, this.willDestroyListener);
            Ember.addListener(this, 'willDestroyElement', this, this.willDestroyListener, true);
            Ember.removeListener(this, 'willDestroyElement', this, 'willDestroyListener');
            Ember.removeListener(this, 'willDestroyElement', this, this.willDestroyListener);
        },
        willDestroyListener() {
        }
    });
}
