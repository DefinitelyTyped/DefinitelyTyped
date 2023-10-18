export = ContentSecurityPolicy;

/**
 * Spec compliant content security policy builder and parser.
 */
declare class ContentSecurityPolicy {
    /**
     * @param data Optionally parse policy data.
     *
     * @example
     * import ContentSecurityPolicy = require('csp-dev');
     *
     * const data = `
     * default-src 'self';
     * script-src 'self' 'unsafe-inline' 'nonce-2726c7f26c' *.test.com;
     * style-src data:
     * `;
     * const parser = new ContentSecurityPolicy(data);
     */
    constructor(data?: string);

    /**
     * Build a policy by loading a descriptor object.
     *
     * @example
     * import ContentSecurityPolicy = require('csp-dev');
     *
     * const builder = new ContentSecurityPolicy();
     * builder.load({
     *   'default-src': ['self'],
     *   'script-src': [
     *     'self', 'unsafe-inline', 'nonce-2726c7f26c', '*.test.com'
     *   ],
     *   'style-src': ['data:']
     * });
     */
    load(directiveDescriptor: ContentSecurityPolicy.DirectiveDescriptor): this;

    /**
     * Add a policy directive.
     *
     * @example
     * import ContentSecurityPolicy = require('csp-dev');
     *
     * const builder = new ContentSecurityPolicy();
     * builder.newDirective('script-src', ['self', 'unsafe-inline', 'nonce-2726c7f26c', '*.test.com']);
     * builder.newDirective('default-src', 'self');
     * builder.newDirective('style-src', 'data:');
     */
    newDirective(directive: ContentSecurityPolicy.Directive, sources: string | readonly string[]): this;

    /**
     * Share data as json, spec compliant csp string or html meta tag.
     *
     * @example
     * import ContentSecurityPolicy = require('csp-dev');
     *
     * const parser = new ContentSecurityPolicy(`
     * default-src 'self';
     * script-src 'self' 'unsafe-inline' 'nonce-2726c7f26c' *.test.com;
     * style-src data:
     * `);
     *
     * parser.share('json');
     * // {
     * //   'default-src': ['self'],
     * //   'script-src': [
     * //     'self', 'unsafe-inline', 'nonce-2726c7f26c', '*.test.com'
     * //   ],
     * //   'style-src': ['data:']
     * // }
     *
     * parser.share('string');
     * // "default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-2726c7f26c' *.test.com; style-src data:"
     *
     * parser.share('html');
     * // "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'; script-src 'self' 'unsafe-inline' 'nonce-2726c7f26c' *.test.com; style-src data:\">"
     */
    share(format: "json"): ContentSecurityPolicy.DirectiveDescriptor;
    share(format: Exclude<ContentSecurityPolicy.ShareFormat, "json">): string;

    /**
     * Validate parsed data.
     *
     * @example
     * import ContentSecurityPolicy = require('csp-dev');
     *
     * const data = `
     * default-src 'self';
     * script-src 'self' 'unsafe-inline' 'nonce-2726c7f26c' *.test.com;
     * style-src data:
     * `;
     * const parser = new ContentSecurityPolicy(data);
     *
     * parser.valid();
     */
    valid(): boolean;
}

declare namespace ContentSecurityPolicy {
    type ShareFormat = "json" | "string" | "html";

    type Directive =
        | "child-src"
        | "connect-src"
        | "default-src"
        | "font-src"
        | "frame-src"
        | "img-src"
        | "manifest-src"
        | "media-src"
        | "object-src"
        | "script-src"
        | "style-src"
        | "base-uri"
        | "plugin-types"
        | "sandbox"
        | "form-action"
        | "frame-ancestors"
        | "block-all-mixed-content"
        | "upgrade-insecure-requests";

    type DirectiveDescriptor = Partial<Record<Directive, string[]>>;
}
