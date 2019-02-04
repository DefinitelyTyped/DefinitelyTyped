import Ember from 'ember';

function testOn() {
    let Job = Ember.Object.extend({
        logCompleted: Ember.on('completed', function() {
            console.log('Job completed!');
        })
    });

    let job = Job.create();

    Ember.sendEvent(job, 'completed'); // Logs 'Job completed!'
}

function testEvented() {
    let Person = Ember.Object.extend(Ember.Evented, {
        greet() {
            this.trigger('greet');
        }
    });

    let person = Person.create();

    person.on('greet', function() {
        console.log('Our person has greeted');
    });

    person.on('greet', function() {
        console.log('Our person has greeted');
    }).one('greet', function() {
        console.log('Offer one-time special');
    }).off('event', {}, function() {});

    person.greet();
}

function testObserver() {
    Ember.Object.extend({
        valueObserver: Ember.observer('value', function() {
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
