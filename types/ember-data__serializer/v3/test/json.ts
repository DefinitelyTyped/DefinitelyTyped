import JSONSerializer from '@ember-data/serializer/json';

class MyJSONSerializer extends JSONSerializer {
    someMethod() {
        // has types from JSONSerializer
        this.keyForLink('a', 'b'); // $ExpectType string
    }
}
