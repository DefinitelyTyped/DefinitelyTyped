import Application from '@ember/application';
import EmberResolver from 'ember-resolver';

const MyResolver = EmberResolver.extend({
    pluralizedTypes: {
        sheep: 'sheep'
    }
});

const App = Application.extend({
    Resolver: MyResolver
});
