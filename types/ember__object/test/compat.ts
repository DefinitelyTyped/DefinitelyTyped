import { dependentKeyCompat } from '@ember/object/compat';

// Example (without irrelevant details) from https://api.emberjs.com/ember/3.18/functions/@ember%2Fobject%2Fcompat/dependentKeyCompat
class Person {
    firstName: string;
    lastName: string;

    @dependentKeyCompat
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
