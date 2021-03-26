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

enableDestroyableTracking();

class Child {
    state: boolean;
    constructor() {
        this.state = true;
        registerDestructor(this, this.stateDestructor);
    }

    stateDestructor() {
        this.state = !this.state;
    }

    keepForever() {
        unregisterDestructor(this, this.stateDestructor);
    }
}

class Parent {
    child: object;

    constructor(child: object) {
        this.child = associateDestroyableChild(this, child);
    }
}

const c = new Child();
const p = new Parent(c);

isDestroyed(c);
isDestroyed(p);

destroy(p);

isDestroying(c);
isDestroying(p);

isDestroyed(c);
isDestroyed(p);

assertDestroyablesDestroyed();
