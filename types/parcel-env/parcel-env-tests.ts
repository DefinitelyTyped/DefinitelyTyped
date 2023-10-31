interface SomeModule {
    someMethod(): void;
}

let someModule = require<SomeModule>("./someModule");
someModule.someMethod();

let otherModule = require("./otherModule");
otherModule.otherMethod();

// check if HMR is enabled
if (module.hot) {
    // accept update of dependency
    module.hot.accept(function() {
        // ...
    });
}

module.exports = null;

// check if HMR is enabled
if (module.hot) {
    // accept itself
    module.hot.accept();

    // dispose handler
    module.hot.dispose(function() {
        // revoke the side effect
        // ...
    });
}

class ModuleData {
    updated: boolean;
}

if (module.hot) {
    module.hot.dispose((data) => {
        data.foo = true;
        // ...
    });
    module.hot.dispose((data: ModuleData) => {
        data.updated = true;
        // ...
    });
    module.hot.accept(() => {});
    module.hot.accept((getParents) => {
      // ...
      return getParents();
    });
    module.hot.data;
}
