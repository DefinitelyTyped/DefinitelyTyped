import {
    assertDestroyablesDestroyed,
    associateDestroyableChild,
    destroy,
    enableDestroyableTracking,
    isDestroyed,
    isDestroying,
    registerDestructor,
    unregisterDestructor
} from '@ember/destroyable';

import { assertType } from './lib/assert';

enableDestroyableTracking(true); // $ExpectError
enableDestroyableTracking({}); // $ExpectError
enableDestroyableTracking('foo'); // $ExpectError
enableDestroyableTracking(1); // $ExpectError
enableDestroyableTracking();

class Child {
    state: boolean;
    constructor() {
        this.state = true;
        registerDestructor(); // $ExpectError
        registerDestructor(this); // $ExpectError
        registerDestructor(this.stateDestructor); // $ExpectError
        registerDestructor(this, this.stateDestructor);
    }

    stateDestructor() {
        this.state = !this.state;
    }

    keepForever() {
        unregisterDestructor(); // $ExpectError
        unregisterDestructor(this); // $ExpectError
        unregisterDestructor(this.stateDestructor); // $ExpectError
        unregisterDestructor(this, this.stateDestructor);
    }
}

class Parent {
    child: object;

    constructor(child: object) {
        this.child = associateDestroyableChild(); // $ExpectError
        this.child = associateDestroyableChild(this); // $ExpectError
        this.child = associateDestroyableChild(child); // $ExpectError
        this.child = associateDestroyableChild(this, child);
    }
}

const c = new Child();
const p = new Parent(c);

destroy(); // $ExpectError

assertType<boolean>(isDestroyed(c));
assertType<boolean>(isDestroyed(p));

destroy(p);

assertType<boolean>(isDestroying(c));
assertType<boolean>(isDestroying(p));

assertType<boolean>(isDestroyed(c));
assertType<boolean>(isDestroyed(p));

assertDestroyablesDestroyed(true); // $ExpectError
assertDestroyablesDestroyed({}); // $ExpectError
assertDestroyablesDestroyed('foo'); // $ExpectError
assertDestroyablesDestroyed(1); // $ExpectError
assertDestroyablesDestroyed();
