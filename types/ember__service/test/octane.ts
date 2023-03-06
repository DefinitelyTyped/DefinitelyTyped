import Service, { inject, service } from '@ember/service';
import EmberObject from '@ember/object';

class FirstSvc extends Service {
    foo = 'bar';
    first() {
        return '';
    }
}
const SecondSvc = Service.extend({
    foo: 'bar',
    second() {
        return '';
    },
});

declare module '@ember/service' {
    interface Registry {
        first: FirstSvc;
        second: InstanceType<typeof SecondSvc>;
    }
}

class Foo extends EmberObject {
    @inject declare foo: FirstSvc;
    @inject('first') declare baz: FirstSvc;
    @inject() declare bar: FirstSvc;
}

class FooService extends EmberObject {
    @service declare foo: FirstSvc;
    @service('first') declare baz: FirstSvc;
    @service() declare bar: FirstSvc;
}
