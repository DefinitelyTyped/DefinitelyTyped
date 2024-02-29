// Testing import.meta is not yet possible!
// Does not work with "module": "commonjs", but linter requires it.

// import.meta.url;
// import.meta.env.NODE_ENV;
// import.meta.env.FOO;
// import.meta.hot.accept(update => update.module);
// import.meta.hot.accept(['./index.d'], update => update.module);
// import.meta.hot.dispose(() => {});
// import.meta.hot.invalidate();
// import.meta.hot.decline();
// if (import.meta.hot) {
//   import.meta.hot.accept();
// }

"file cannot be empty, but DefinitelyTyped test runner does not support import.meta";
