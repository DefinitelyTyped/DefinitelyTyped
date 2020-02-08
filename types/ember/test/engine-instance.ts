import Ember from 'ember';
const { EngineInstance } = Ember;

const engineInstance = EngineInstance.create();
engineInstance.register('some:injection', class Foo {});

engineInstance.register('some:injection', class Foo {}, {
  singleton: true,
});

engineInstance.register('some:injection', class Foo {}, {
  instantiate: false,
});

engineInstance.register('some:injection', class Foo {}, {
    singleton: false,
    instantiate: true,
});

engineInstance.factoryFor('router:main');
engineInstance.lookup('route:basic');

engineInstance.boot();

(async () => {
  await engineInstance.boot();
})();
