import Owner from '@ember/owner';
import { getOwner, setOwner } from '@ember/application';
import EmberObject from '@ember/object';

declare let owner: Owner;

class MyClass extends EmberObject {}
const classInstance = new MyClass();

setOwner(classInstance, owner);
getOwner({}); // $ExpectType Owner
