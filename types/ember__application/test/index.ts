import { getOwner, setOwner } from '@ember/application';
import EngineInstance from '@ember/engine/instance';
import Owner from '@ember/owner';
import ApplicationInstance from '@ember/application/instance';

// $ExpectType Owner | undefined
getOwner({});

// @ts-expect-error
getOwner();

declare let baseOwner: Owner;
setOwner({}, baseOwner);

declare let engine: EngineInstance;
setOwner({}, engine);

declare let application: ApplicationInstance;
setOwner({}, application);
