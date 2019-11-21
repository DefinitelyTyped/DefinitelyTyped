import EmberResolver from 'ember-resolver';
import Ember from 'ember';

const MyResolver = EmberResolver.extend({
    pluralizedTypes: {
        sheep: 'sheep'
    }
});

const App = Ember.Application.extend({
    Resolver: MyResolver
});
