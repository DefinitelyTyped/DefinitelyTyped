import resolveBin from "resolve-bin";

// Asynchronous
(() => {
    resolveBin("my-package", (error, path) => {
        error; // $ExpectType Error | null
        path; // $ExpectType string
    });
})();

// Asynchronous with options
(() => {
    resolveBin("my-package", { executable: "custom-package-name" }, (error, path) => {
        error; // $ExpectType Error | null
        path; // $ExpectType string
    });
})();

// Synchronous
(() => {
    resolveBin.sync("my-package"); // $ExpectType string
})();

// Synchronous with options
(() => {
    resolveBin.sync("my-package", { executable: "custom-package-name" }); // $ExpectType string
})();
