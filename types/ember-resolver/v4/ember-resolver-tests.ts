import Ember from 'ember';
import EmberResolver from 'ember-resolver';

const MyResolver = EmberResolver.extend({
    pluralizedTypes: {
        sheep: 'sheep'
    }
});

const App = Ember.Application.extend({
    Resolver: MyResolver
});
