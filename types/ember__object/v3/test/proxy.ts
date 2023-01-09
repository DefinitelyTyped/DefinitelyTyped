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

// @ts-expect-error
book.get('unknownProperty');
book.get('title'); // $ExpectType string | undefined
book.get('altTitle'); // $ExpectType string
book.getTitle(); // $ExpectType string | undefined

// @ts-expect-error
book.getProperties('title', 'unknownProperty');
book.getProperties('title', 'subtitle'); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "title" | "subtitle">
book.getPropertiesTitleSubtitle(); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "title" | "subtitle">
// tslint:disable-next-line
book.getProperties(['subtitle', 'chapters']); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "subtitle" | "chapters"> || Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "chapters" | "subtitle">
// @ts-expect-error
book.getProperties(['title', 'unknownProperty']);

// @ts-expect-error
book.get('baz');

book.set('title', 'New');
// @ts-expect-error
book.set('title', 1);
book.set('altTitle', 'Alternate');
// @ts-expect-error
book.set('altTitle', 1);
book.setProperties({
    title: 'new',
    subtitle: 'and improved',
    altTitle: 'Alternate2',
});
// @ts-expect-error
book.setProperties({ title: 1 });
// @ts-expect-error
book.setProperties({ altTitle: 1 });
// @ts-expect-error
book.setProperties({ invalid: true });

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
// @ts-expect-error
person.set('fullName', 1);
// @ts-expect-error
person.set('invalid', true);
person.setProperties({ fullName: 'John Doe' }); // $ExpectType Pick<UnwrapComputedPropertySetters<PersonProxy & Person>, "fullName">
person.setProperties({ fullName: 'John Doe' }).fullName; // $ExpectType string
// @ts-expect-error
person.setProperties({ fullName: 1 });
// @ts-expect-error
person.setProperties({ fullName: 'John Doe', invalid: true });
