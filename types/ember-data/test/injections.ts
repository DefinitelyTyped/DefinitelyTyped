import DS from 'ember-data';
import { service } from '@ember/service';
import Store from 'ember-data/store';
import Route from '@ember/routing/route';

class MyModel extends DS.Model {}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'my-model': MyModel;
    }
}

class RouteTest extends Route {
    @service declare store: Store;

    model(): any {
        return this.store.findAll('my-model');
    }
}
