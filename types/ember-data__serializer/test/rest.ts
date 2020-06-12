import RESTSerializer, { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';
import EmberObject from '@ember/object';
import Model from '@ember-data/model';

class MySerializer extends RESTSerializer {
    because = 'this needs to have the right type *and* the right runtime';

    someMethod() {
        // has types from RESTSerializer
        this.keyForPolymorphicType('a', 'b', 'c'); // $ExpectType string
    }
}

class Foo extends EmberObject.extend(EmbeddedRecordsMixin) {
    someMethod() {
        this.normalize; // $ExpectType (typeClass: Model, hash: {}, prop: string) => {}
    }
}
