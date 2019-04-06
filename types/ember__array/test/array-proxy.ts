import { assertType } from './lib/assert';
import ArrayProxy from '@ember/array/proxy';
import { A } from '@ember/array';

const pets = ['dog', 'cat', 'fish'];
const proxy = ArrayProxy.create({ content: A(pets) });

proxy.get('firstObject'); // 'dog'
proxy.set('content', A(['amoeba', 'paramecium']));
proxy.get('firstObject'); // 'amoeba'

const overridden = ArrayProxy.create({
    content: A(pets),
    objectAtContent(idx: number): string {
        return this.get('content').objectAt(idx)!.toUpperCase();
    }
});

overridden.get('firstObject'); // 'DOG'

class MyNewProxy<T> extends ArrayProxy<T> {
    isNew = true;
}

const x = MyNewProxy.create({ content: A([1, 2, 3]) }) as MyNewProxy<number>;
assertType<number | undefined>(x.get('firstObject'));
assertType<boolean>(x.isNew);
