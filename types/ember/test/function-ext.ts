import Ember from 'ember';

declare global {
    // tslint:disable-next-line:no-empty-interface
    interface Function extends Ember.FunctionPrototypeExtensions {}
}

Ember.Object.extend({
    foo: '',

    // tslint:disable-next-line:only-arrow-functions
    observer: function () {}.observes('foo', 'bar'),

    // tslint:disable-next-line:only-arrow-functions
    on: function () {}.on('foo', 'bar'),
});
