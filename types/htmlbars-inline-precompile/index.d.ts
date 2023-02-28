// Type definitions for non-npm package htmlbars-inline-precompile 3.0
// Project: https://github.com/ember-cli/ember-cli-htmlbars-inline-precompile
// Definitions by: Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Chris Krycho <https://github.com/chriskrycho>
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

// This uses the same "brand" as the types for `ember-cli-htmlbars` for
// backwards compatibility. The actual value of the brand doesn't matter; it is
// only important that it (a) is distinct and (b) interoperates with existing
// uses of the `hbs` export from [`htmlbars-inline-precompile`][1] and
// [`ember-cli-htmlbars`][2].
//
// [1]:
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/24a21e0b8ec7eccdec781d7513bfa5947f1c6e20/types/ember/index.d.ts#L540:L542
// [2]:
// https://github.com/ember-cli/ember-cli-htmlbars/blob/ff397bb00b065d97b00111de5ae1e4240a778f26/lib/index.d.ts
//
// Note that we do export this; the details are irrelevant to consumers. The
// point is simply to have a *distinct* type that is therefore not substitutable
// for just any other type. (In the future, we will coordinate a change which
// makes this export only the type side of a class with a private property, such
// that it *cannot* be used.)
export interface TemplateFactory {
    __htmlbars_inline_precompile_template_factory: any;
}

export default function hbs(tagged: TemplateStringsArray): TemplateFactory;
