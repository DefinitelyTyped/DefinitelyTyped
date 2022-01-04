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
    @inject foo: FirstSvc;
    @inject('first') baz: FirstSvc;
    @inject() bar: FirstSvc;
}

class FooService extends EmberObject {
    @service foo: FirstSvc;
    @service('first') baz: FirstSvc;
    @service() bar: FirstSvc;
}
