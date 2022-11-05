import EmberResolver from 'ember-resolver';
import Ember from 'ember';

const MyResolver = EmberResolver.extend({
    pluralizedTypes: {
        sheep: 'sheep',
    },
});

const App = Ember.Application.extend({
    Resolver: MyResolver,
});

const resolver = MyResolver.create();
resolver.resolve('some:name');
resolver.normalize('some:name');
// @ts-expect-error
resolver.normalize('bad-name');
