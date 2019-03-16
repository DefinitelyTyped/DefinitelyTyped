import { default as EmberObject, action, computed } from "..";

// Native class syntax
class Foo extends EmberObject {
    firstName: string;
    lastName: string;

    @action // $ExpectError
    bar: string;

    @computed("firstName", "lastName")
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    @action
    foo() {}
}
