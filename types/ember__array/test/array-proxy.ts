import { assertType } from './lib/assert';
import ArrayProxy from '@ember/array/proxy';
import EmberArray, { A } from '@ember/array';
import EmberObject from '@ember/object';

const pets = ['dog', 'cat', 'fish'];
const proxy = ArrayProxy.create({ content: A(pets) });

proxy.get('firstObject'); // 'dog'
proxy.set('content', A(['amoeba', 'paramecium']));
proxy.get('firstObject'); // 'amoeba'

const overridden = ArrayProxy.create({
    content: A(pets),
    objectAtContent(idx: number): string | undefined {
        return this.get('content').objectAt(idx)?.toUpperCase();
    },
});

overridden.get('firstObject'); // 'DOG'

class MyNewProxy<T> extends ArrayProxy<T> {
    isNew = true;
}

const x = MyNewProxy.create({ content: A([1, 2, 3]) }) as MyNewProxy<number>;
assertType<number | undefined>(x.get('firstObject'));
assertType<boolean>(x.isNew);

// Custom EmberArray
class MyArray<T> extends EmberObject.extend(EmberArray) {
    constructor(content: ArrayLike<T>) {
        super();
        this._content = content;
    }

    _content: ArrayLike<T>;

    get length() {
        return this._content.length;
    }

    objectAt(idx: number) {
        return this._content[idx];
    }
}

const customArrayProxy = ArrayProxy.create({ content: new MyArray(pets) });
customArrayProxy.get('firstObject'); // 'dog'

// Vanilla array
const vanillaArrayProxy = ArrayProxy.create({ content: pets });
vanillaArrayProxy.get('firstObject'); // 'dog'

// Nested ArrayProxy
const nestedArrayProxy = ArrayProxy.create({ content: proxy });
nestedArrayProxy.get('firstObject'); // 'amoeba'
