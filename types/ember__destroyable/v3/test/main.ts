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

// @ts-expect-error
enableDestroyableTracking(true);
// @ts-expect-error
enableDestroyableTracking({});
// @ts-expect-error
enableDestroyableTracking('foo');
// @ts-expect-error
enableDestroyableTracking(1);
enableDestroyableTracking();

class Child {
    state: boolean;
    constructor() {
        this.state = true;
        // @ts-expect-error
        registerDestructor();
        // @ts-expect-error
        registerDestructor(this);
        // @ts-expect-error
        registerDestructor(this.stateDestructor);
        registerDestructor(this, this.stateDestructor);
    }

    stateDestructor() {
        this.state = !this.state;
    }

    keepForever() {
        // @ts-expect-error
        unregisterDestructor();
        // @ts-expect-error
        unregisterDestructor(this);
        // @ts-expect-error
        unregisterDestructor(this.stateDestructor);
        unregisterDestructor(this, this.stateDestructor);
    }
}

class Parent {
    child: object;

    constructor(child: object) {
        // @ts-expect-error
        this.child = associateDestroyableChild();
        // @ts-expect-error
        this.child = associateDestroyableChild(this);
        // @ts-expect-error
        this.child = associateDestroyableChild(child);
        this.child = associateDestroyableChild(this, child);
    }
}

const c = new Child();
const p = new Parent(c);

// @ts-expect-error
destroy();

assertType<boolean>(isDestroyed(c));
assertType<boolean>(isDestroyed(p));

destroy(p);

assertType<boolean>(isDestroying(c));
assertType<boolean>(isDestroying(p));

assertType<boolean>(isDestroyed(c));
assertType<boolean>(isDestroyed(p));

// @ts-expect-error
assertDestroyablesDestroyed(true);
// @ts-expect-error
assertDestroyablesDestroyed({});
// @ts-expect-error
assertDestroyablesDestroyed('foo');
// @ts-expect-error
assertDestroyablesDestroyed(1);
assertDestroyablesDestroyed();
