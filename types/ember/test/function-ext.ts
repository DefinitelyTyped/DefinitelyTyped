import Ember from 'ember';

declare global {
    // tslint:disable-next-line:no-empty-interface
    interface Function extends Ember.FunctionPrototypeExtensions {}
}

Ember.Object.extend({
    foo: '',

    // tslint:disable-next-line:only-arrow-functions
    arr: function() {
        return [];
    }.property(),

    alias: function(this: any) {
        return this.get('foo');
    }.property('foo', 'bar.@each.baz'),

    // tslint:disable-next-line:only-arrow-functions
    observer: function() {}.observes('foo', 'bar'),

    // tslint:disable-next-line:only-arrow-functions
    on: function() {}.on('foo', 'bar'),
});
