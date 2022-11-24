import { Opaque } from 'ember/-private/type-utils';

/**
 * Template-only components have no backing class instance, so this in their
 * templates is null. This means that you can only reference passed in arguments
 * via named argument syntax (e.g. `{{@arg}}`):
 *
 * ```hbs
 * {{!--
 *   This does not work, since `this` does not exist
 * --}}
 * <label for="title">Title</label>
 * <Input @value={{this.value}} id="title" />
 * ```
 *
 * Additionally, the mut helper generally can't be used for the same reason:
 *
 * ```hbs
 * {{!-- This does not work --}}
 * <input
 *   value={{this.value}}
 *   onkeyup={{action (mut this.value) target="value"}}
 * />
 * ```
 *
 * Since Octane, a template-only component shares a subset of features that are
 * available in `@glimmer/component`. Such component can be seamlessly
 * "upgraded" to a Glimmer component, when you add a JavaScript file alongside
 * the template.
 */
export interface TemplateOnlyComponent<S = unknown> extends Opaque<S> {
    toString(): string;
}

/**
 * A convenience alias for {@link TemplateOnlyComponent}
 */
export type TOC<S> = TemplateOnlyComponent<S>;

// The generic here is for a *signature: a way to hang information for tools
// like Glint which can provide typey checking for component templates using
// information supplied via this generic. While it may appear useless on this
// class definition and extension, it is used by external tools and should not
// be removed.
// tslint:disable-next-line:no-unnecessary-generics
export default function templateOnly<S>(moduleName?: string): TemplateOnlyComponent<S>;
