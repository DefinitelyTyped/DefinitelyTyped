// Type definitions for htmlbars-inline-precompile 1.0
// Project: https://github.com/ember-cli/ember-cli-htmlbars-inline-precompile
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is a bit of a funky one: it's from a [Babel plugin], but is exported for
// Ember applications as the module `"htmlbars-inline-precompile"`. It acts
// like a tagged string from the perspective of consumers, but is actually an
// AST transformation which generates a function as its output. That function in
// turn [generates a string or array of strings][output] to use with the Ember
// testing helper `this.render()`.
//
// [Babel plugin]: https://github.com/ember-cli/babel-plugin-htmlbars-inline-precompile#babel-plugin-htmlbars-inline-precompile-
// [output]: https://github.com/emberjs/ember-test-helpers/blob/77f9a53da9d8c19a85b3122788caadbcc59274c2/lib/ember-test-helpers/-legacy-overrides.js#L17-L42

export default function hbs(tagged: TemplateStringsArray): string | string[];
