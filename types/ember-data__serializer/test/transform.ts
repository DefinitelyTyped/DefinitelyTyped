import Transform from '@ember-data/serializer/transform';

class Foo extends Transform {
    someMethod() {
        // has types from Transform
        this.serialize({ cool: 'cool cool' }, { defaultValue: 'potato', allowNull: false }); // $ExpectType any
    }
}
