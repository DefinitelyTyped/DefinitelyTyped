// Type definitions for htmlbars-inline-precompile 1.0
// Project: ember-cli-htmlbars-inline-precompile
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is a bit of a funky one: it's from a [Babel plugin], but is exported for
// Ember applications as the module `"htmlbars-inline-precompile"`. It acts
// like a tagged string from the perspective of consumers, but is actually an
// AST transformation which generates a function as its output.
//
// [Babel plugin]: https://github.com/ember-cli/babel-plugin-htmlbars-inline-precompile#babel-plugin-htmlbars-inline-precompile-

export default function hbs(tagged: TemplateStringsArray): () => {};
