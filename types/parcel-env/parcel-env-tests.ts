interface SomeModule {
    someMethod(): void;
}

let someModule = require<SomeModule>("./someModule");
someModule.someMethod();

let otherModule = require("./otherModule");
otherModule.otherMethod();

module.exports = null;

class ModuleData {
    updated: boolean;
}

// check if HMR is enabled
if (module.hot) {
    // dispose handler
    module.hot.dispose(() => {
        // revoke the side effect
        // ...
    });
    module.hot.dispose((data) => {
        data.foo = true;
        // ...
    });
    module.hot.dispose((data: ModuleData) => {
        data.updated = true;
        // ...
    });

    // accept itself
    module.hot.accept(() => {});
    // accept itself and all dependents
    module.hot.accept((getParents) => {
        // ...
        return getParents();
    });
    // accept itself and specific dependents
    module.hot.accept((getParents) => {
        // ...
        return getParents().filter((parent) => parent[1] === "someModuleId");
    });

    // data stored in previous dispose handler
    module.hot.data;
}
