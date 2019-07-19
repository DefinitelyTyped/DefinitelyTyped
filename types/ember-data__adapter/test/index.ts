import Service, { inject as service } from '@ember/service';
import Adapter, { BuildURLMixin } from '@ember-data/adapter';
import Model from '@ember-data/model';

import Store from '@ember-data/store';
import DS from 'ember-data';

class Session extends Service {}

declare module '@ember/service' {
    interface Registry {
        session: Session;
    }
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        rootModel: any;
        'super-user': any;
    }
}

declare module 'ember-data/types/registries/adapter' {
    export default interface AdapterRegistry {
        customized: Customized;
    }
}

class Customized extends Adapter {
    @service session: Session;

    someMethod() {
        this.defaultSerializer = 'a string';
        this.defaultSerializer = 12; // $ExpectError
    }
}

const MixedIn = Adapter.extend(BuildURLMixin, {
    findRecord(store: Store, type: typeof Model, id: string, snapshot: DS.Snapshot) {
        var url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
        return $.ajax(url, { method: 'GET' });
    },
});
