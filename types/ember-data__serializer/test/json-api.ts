import JSONAPISerializer from '@ember-data/serializer/json-api';

class MoarSerialized extends JSONAPISerializer {
    someMethod() {
        // has types from JSONAPISerializer
        this.modelNameFromPayloadKey('hello'); // $ExpectType string
    }
}
