import Ember from 'ember';

declare global {
    interface Function extends Ember.FunctionPrototypeExtensions {}
}

Ember.Object.extend({
    foo: '',

    arr: function () {
        return [];
    }.property(),

    alias: function (this: any) {
        return this.get('foo');
    }.property('foo', 'bar.@each.baz'),

    observer: function () {}.observes('foo', 'bar'),

    on: function () {}.on('foo', 'bar'),
});
