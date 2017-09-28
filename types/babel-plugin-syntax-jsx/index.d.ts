// Type definitions for babel-plugin-syntax-jsx 6.18
// Project: https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-jsx
// Definitions by: Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// NB: This export doesn't match the handbook example, where `jsx` is the default export.
// But it does match the runtime behaviour (at least at the time of this writing). For some reason,
// babel-plugin-syntax-jsx/lib/index.js has this line at the bottom: module.exports = exports["default"];
declare function jsx(): {
    manipulateOptions(opts: any, parserOpts: { plugins: string[] }): void;
};

export default jsx;
