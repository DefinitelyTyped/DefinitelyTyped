import ObjectProxy from "@ember/object/proxy";

interface Book {
  title: string;
  subtitle: string;
  chapters: Array<{ title: string }>;
}

class DefaultProxy extends ObjectProxy {}
DefaultProxy.create().content; // $ExpectType object | undefined

class BookProxy extends ObjectProxy<Book> {
  private readonly baz = 'baz';

  getTitle() {
    return this.get('title');
  }

  getPropertiesTitleSubtitle() {
    return this.getProperties('title', 'subtitle');
  }
}

const book = BookProxy.create();
book.content; // $ExpectType Book | undefined

book.get("unknownProperty"); // $ExpectError
book.get("title"); // $ExpectType string | undefined
book.getTitle(); // $ExpectType string | undefined

book.getProperties("title", "unknownProperty"); // $ExpectError
book.getProperties("title", "subtitle"); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "title" | "subtitle">
book.getPropertiesTitleSubtitle(); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "title" | "subtitle">

book.getProperties(["subtitle", "chapters"]); // $ExpectType Pick<Partial<UnwrapComputedPropertyGetters<Book>>, "subtitle" | "chapters">
book.getProperties(["title", "unknownProperty"]); // $ExpectError

book.get("baz"); // $ExpectError
