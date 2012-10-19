/// <reference path="../Definitions/ember-1.0.d.ts" />

var App;

App = Em.Application.create();

App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
});

class MyView extends Em.View {
    mouseDown() {
        window.alert("hello world!");
    }
}

App.Person = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    fullName: function() {
        return this.get('firstName') +
               " " + this.get('lastName');
    }.property('firstName', 'lastName')
});
App.peopleController = Em.ArrayController.create({
    content: App.Person.findAll()
});

App.president = Ember.Object.create({
    name: "Barack Obama"
});
App.country = Ember.Object.create({
    presidentNameBinding: 'App.president.name'
});
App.country.get('presidentName');

App.president = Ember.Object.create({
    firstName: "Barack",
    lastName: "Obama",
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property()
});
App.president.get('fullName');

App.president = Ember.Object.create({
    firstName: "Barack",
    lastName: "Obama",
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});

App.PaintSample = Ember.Object.extend({
    color: 'red',
    colour: Ember.alias('color'),
    name: function () {
        return "Zed";
    },
    moniker: Ember.alias("name")
});
var paintSample = App.PaintSample.create();
paintSample.get('colour');
paintSample.moniker();

Ember.assert('Must pass a valid object', obj);
Ember.assert('This code path should never be run');
