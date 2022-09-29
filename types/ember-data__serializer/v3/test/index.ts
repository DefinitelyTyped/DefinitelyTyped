import Serializer from '@ember-data/serializer';
import ModelRegistry from 'ember-data/types/registries/model';
import Store from '@ember-data/store';
import Model from '@ember-data/model';

class FakeModel extends Model {
    hasFunData = true;
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        'fake-model': FakeModel;
    }
}

class MySerializer extends Serializer {
    someMethod() {
        // has types from Serializer
        this.store; // $ExpectType Store
        this.normalize(new FakeModel(), { works: 'yep' }); // $ExpectType {}
    }
}
