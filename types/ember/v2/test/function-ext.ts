import Ember from "ember";

Ember.Object.extend({
    foo: "",

    arr: function() {
        return [];
    }.property(),

    alias: function(this: any) {
        return this.get("foo");
    }.property("foo", "bar.@each.baz"),

    observer: function() {}.observes("foo", "bar"),

    on: function() {}.on("foo", "bar"),
});
