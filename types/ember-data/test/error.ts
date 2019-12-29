import Ember from 'ember';
import DS from 'ember-data';
import { assertType } from './lib/assert';

const { AdapterError } = DS;

// https://emberjs.com/api/ember-data/2.16/classes/DS.AdapterError
const MaintenanceError = DS.AdapterError.extend({
    message: 'Down for maintenance.',
});
const maintenanceError = new MaintenanceError();
assertType<DS.AdapterError>(maintenanceError);

// https://emberjs.com/api/ember-data/2.16/classes/DS.InvalidError
const anInvalidError = new DS.InvalidError([
    {
        detail: 'Must be unique',
        source: { pointer: '/data/attributes/title' },
    },
    {
        detail: 'Must not be blank',
        source: { pointer: '/data/attributes/content' },
    },
]);

// https://emberjs.com/api/ember-data/2.16/classes/DS.TimeoutError
const { TimeoutError } = DS;
const timedOut = Ember.Route.extend({
    actions: {
        error(error: any, transition: any) {
            if (error instanceof TimeoutError) {
                // alert the user
                alert('Are you still connected to the internet?');
                return;
            }

            // ...other error handling logic
        },
    },
});

// This is technically private, but publicly exposed for APIs to use. We just
// check that it is a proper subclass of `AdapterError`.
// https://emberjs.com/api/ember-data/2.16/classes/DS.AbortError
// https://github.com/emberjs/data/blob/v2.16.0/addon/-private/adapters/errors.js#L206-L216
const { AbortError } = DS;
assertType<typeof AdapterError>(AbortError);

// https://emberjs.com/api/ember-data/2.16/classes/DS.UnauthorizedError
const { UnauthorizedError } = DS;
assertType<typeof AdapterError>(UnauthorizedError);
const unauthorized = Ember.Route.extend({
    actions: {
        error(error: any, transition: any) {
            if (error instanceof UnauthorizedError) {
                // go to the sign in route
                this.transitionTo('login');
                return;
            }

            // ...other error handling logic
        },
    },
});

// This is technically private, but publicly exposed for APIs to use. We just
// check that it is a proper subclass of `AdapterError`.
// https://emberjs.com/api/ember-data/2.16/classes/DS.ForbiddenError
// https://github.com/emberjs/data/blob/v2.16.0/addon/-private/adapters/errors.js#L253-L263
const { ForbiddenError } = DS;
assertType<typeof AdapterError>(ForbiddenError);

// https://emberjs.com/api/ember-data/2.16/classes/DS.NotFoundError
const { NotFoundError } = DS;
assertType<typeof AdapterError>(NotFoundError);
const notFound = Ember.Route.extend({
    model(params: { post_id: string }): any {
        return this.get('store').findRecord('post', params.post_id);
    },

    actions: {
        error(error: any, transition: any): any {
            if (error instanceof NotFoundError) {
                // redirect to a list of all posts instead
                this.transitionTo('posts');
            } else {
                // otherwise let the error bubble
                return true;
            }
        },
    },
});

// This is technically private, but publicly exposed for APIs to use. We just
// check that it is a proper subclass of `AdapterError`.
// https://emberjs.com/api/ember-data/2.16/classes/DS.ConflictError
// https://github.com/emberjs/data/blob/v2.16.0/addon/-private/adapters/errors.js#L303-L313
const { ConflictError } = DS;
assertType<typeof AdapterError>(ConflictError);

// This is technically private, but publicly exposed for APIs to use. We just
// check that it is a proper subclass of `AdapterError`.
// https://emberjs.com/api/ember-data/2.16/classes/DS.ServerError
// https://github.com/emberjs/data/blob/v2.16.0/addon/-private/adapters/errors.js#L315-L323
const { ServerError } = DS;
assertType<typeof AdapterError>(ServerError);
