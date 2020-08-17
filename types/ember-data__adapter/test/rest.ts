import RESTAdapter from '@ember-data/adapter/rest';

class MyRESTAdapter extends RESTAdapter {
    someMethod() {
        this.coalesceFindRequests; // $ExpectType boolean
        this.namespace; // $ExpectType string
    }
}
