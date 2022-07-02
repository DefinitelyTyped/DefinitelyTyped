import ApplicationInstance from '@ember/application/instance';
import hbs from 'htmlbars-inline-precompile';

const appInstance = ApplicationInstance.create();
appInstance.register('some:injection', class Foo {});

appInstance.register('some:injection', class Foo {}, {
    singleton: true,
});

appInstance.register('some:injection', class Foo {}, {
    instantiate: false,
});

appInstance.register('templates:foo/bar', hbs`<h1>Hello World</h1>`);
appInstance.register('templates:foo/bar', hbs`<h1>Hello World</h1>`, {
    singleton: true,
});
appInstance.register('templates:foo/bar', hbs`<h1>Hello World</h1>`, {
    instantiate: true,
});
appInstance.register('templates:foo/bar', hbs`<h1>Hello World</h1>`, {
    singleton: true,
    instantiate: true,
});
// @ts-expect-error
appInstance.register('templates:foo/bar', hbs`<h1>Hello World</h1>`, { singleton: 'true', instantiate: true });

appInstance.register('some:injection', class Foo {}, {
    singleton: false,
    instantiate: true,
});

appInstance.factoryFor('router:main');
appInstance.lookup('route:basic');

appInstance.boot();

(async () => {
    await appInstance.boot();
})();
