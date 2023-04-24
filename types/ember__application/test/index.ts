import { getOwner, setOwner } from '@ember/application';
import EngineInstance from '@ember/engine/instance';
import Owner from '@ember/owner';
import ApplicationInstance from '@ember/application/instance';
import Service from '@ember/service';

// $ExpectType Owner | undefined
getOwner({});

// Confirm that random subclasses work as expected.
declare class MyService extends Service {
    withStuff: true;
}
declare let myService: MyService;
// $ExpectType Owner
getOwner(myService);

// @ts-expect-error
getOwner();

declare let baseOwner: Owner;
setOwner({}, baseOwner);

declare let engine: EngineInstance;
setOwner({}, engine);

declare let application: ApplicationInstance;
setOwner({}, application);
