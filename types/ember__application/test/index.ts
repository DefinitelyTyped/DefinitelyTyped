import { getOwner, setOwner } from '@ember/application';
import EngineInstance from '@ember/engine/instance';
import Owner from '@ember/owner';
import ApplicationInstance from '@ember/application/instance';
import Service from '@ember/service';
import GlimmerComponent from '@glimmer/component';

// $ExpectType Owner | undefined
getOwner({});

// Confirm that random subclasses work as expected.
declare class MyService extends Service {
    withStuff: true;
}
declare let myService: MyService;
// $ExpectType Owner
getOwner(myService);

declare class MyComponent extends GlimmerComponent {}
declare let myComponent: MyComponent;
// $ExpectType Owner
getOwner(myComponent);

declare class MyComponentWithSignature extends GlimmerComponent<{
    Element: HTMLDivElement;
    Args: {
        Named: {
            foo: string;
        };
    };
}> {}
declare let myComponentWithSignature: MyComponentWithSignature;
// $ExpectType Owner
getOwner(myComponentWithSignature);

// @ts-expect-error
getOwner();

declare let baseOwner: Owner;
setOwner({}, baseOwner);

declare let engine: EngineInstance;
setOwner({}, engine);

declare let application: ApplicationInstance;
setOwner({}, application);
