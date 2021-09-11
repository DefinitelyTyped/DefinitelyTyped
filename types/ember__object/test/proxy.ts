import Ember from 'ember';
import ObjectProxy from '@ember/object/proxy';

interface Book {
    title: string;
    subtitle: string;
    chapters: Array<{ title: string }>;
}

class DefaultProxy extends ObjectProxy {}
DefaultProxy.create().content; // $ExpectType object | undefined

class BookProxy extends ObjectProxy<Book> {
    private readonly baz = 'baz';

    altTitle = 'Alt';

    getTitle() {
        return this.get('title');
    }

    getPropertiesTitleSubtitle() {
        return this.getProperties('title', 'subtitle');
    }
}

const book = BookProxy.create();
book.content; // $ExpectType Book | undefined

book.get('unknownProperty'); // $ExpectError
book.get('title'); // $ExpectType string | undefined
book.get('altTitle'); // $ExpectType string
book.getTitle(); // $ExpectType string | undefined

book.getProperties('title', 'unknownProperty'); // $ExpectError
book.getProperties('title', 'subtitle'); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "title" | "subtitle">
book.getPropertiesTitleSubtitle(); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "title" | "subtitle">

book.getProperties(['subtitle', 'chapters']); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "subtitle" | "chapters">
book.getProperties(['title', 'unknownProperty']); // $ExpectError

book.get('baz'); // $ExpectError

book.set('title', 'New');
book.set('title', 1); // $ExpectError
book.set('altTitle', 'Alternate');
book.set('altTitle', 1); // $ExpectError
book.setProperties({
    title: 'new',
    subtitle: 'and improved',
    altTitle: 'Alternate2',
});
book.setProperties({ title: 1 }); // $ExpectError
book.setProperties({ altTitle: 1 }); // $ExpectError
book.setProperties({ invalid: true }); // $ExpectError

class Person extends Ember.Object {
    firstName = 'Peter';

    lastName = 'Wagenet';

    fullName = Ember.computed('firstName', 'lastName', {
        get() {
          return `${this.firstName} ${this.lastName}`;
        },

        set(key, value: string) {
          const [firstName, lastName] = value.split(' ');

          Ember.set(this, 'firstName', firstName);
          Ember.set(this, 'lastName', lastName);

          return value;
        }
    });
}

class PersonProxy extends ObjectProxy<Person> { }

const person = PersonProxy.create();

person.get('firstName'); // $ExpectType string | undefined
person.get('fullName'); // $ExpectType string | undefined
person.set('fullName', 'John Doe'); // $ExpectType string
person.set('fullName', 1); // $ExpectError
person.set('invalid', true); // $ExpectError
person.setProperties({ fullName: 'John Doe' }); // $ExpectType Pick<UnwrapComputedPropertySetters<PersonProxy & Person>, "fullName">
person.setProperties({ fullName: 'John Doe' }).fullName; // $ExpectType string
person.setProperties({ fullName: 1 }); // $ExpectError
person.setProperties({ fullName: 'John Doe', invalid: true }); // $ExpectError
