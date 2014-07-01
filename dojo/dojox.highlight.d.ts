// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="dijit.d.ts" />
declare module dojox {
    
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight.html
     *
     * Deprecated.  Should require dojox/highlight modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface highlight {
    }
    module highlight {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/_base.html
         *
         * Syntax highlighting with language auto-detection package
         * Syntax highlighting with language auto-detection package.
         * Released under CLA by the Dojo Toolkit, original BSD release
         * available from: http://softwaremaniacs.org/soft/highlight/
         * 
         */
        interface _base {
            /**
             * 
             */
            constants: Object;
            /**
             * 
             */
            languages: string;
            /**
             * A class object to allow for dojoType usage with the highlight engine. This is
             * NOT a Widget in the conventional sense, and does not have any member functions for
             * the instance. This is provided as a convenience. You likely should be calling
             * dojox.highlight.init directly.
             * 
             * @param props               OptionalUnused. Pass 'null' or {}. Positional usage to allow dojo.parser to instantiatethis class as other Widgets would be.             
             * @param node A String ID or DomNode reference to use as the root node of this instance.             
             */
            Code(props: Object, node: String): void;
            /**
             * A class object to allow for dojoType usage with the highlight engine. This is
             * NOT a Widget in the conventional sense, and does not have any member functions for
             * the instance. This is provided as a convenience. You likely should be calling
             * dojox.highlight.init directly.
             * 
             * @param props               OptionalUnused. Pass 'null' or {}. Positional usage to allow dojo.parser to instantiatethis class as other Widgets would be.             
             * @param node A String ID or DomNode reference to use as the root node of this instance.             
             */
            Code(props: Object, node: HTMLElement): void;
        }
        module _base {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/_base.constants.html
             *
             * 
             */
            interface constants {
                /**
                 * 
                 */
                APOS_STRING_MODE: Object;
                /**
                 * 
                 */
                BACKSLASH_ESCAPE: Object;
                /**
                 * 
                 */
                C_BLOCK_COMMENT_MODE: Object;
                /**
                 * 
                 */
                C_LINE_COMMENT_MODE: Object;
                /**
                 * 
                 */
                C_NUMBER_MODE: Object;
                /**
                 * 
                 */
                C_NUMBER_RE: string;
                /**
                 * 
                 */
                HASH_COMMENT_MODE: Object;
                /**
                 * 
                 */
                IDENT_RE: string;
                /**
                 * 
                 */
                NUMBER_RE: string;
                /**
                 * 
                 */
                QUOTE_STRING_MODE: Object;
                /**
                 * 
                 */
                UNDERSCORE_IDENT_RE: string;
            }
        }

        module languages {
            module _all {
            }

            module _dynamic {
            }

            module _static {
            }

            module _www {
            }

            module pygments {
                module _html {
                }

                module _www {
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/css.html
                 *
                 * 
                 */
                interface css {
                    /**
                     * 
                     */
                    defaultMode: Object;
                    /**
                     * 
                     */
                    modes: any[];
                }
                module css {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/css.defaultMode.html
                     *
                     * 
                     */
                    interface defaultMode {
                        /**
                         * 
                         */
                        contains: any[];
                        /**
                         * 
                         */
                        keywords: Object;
                        /**
                         * 
                         */
                        lexems: any[];
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/html.html
                 *
                 * 
                 */
                interface html {
                    /**
                     * 
                     */
                    case_insensitive: boolean;
                    /**
                     * 
                     */
                    defaultMode: Object;
                    /**
                     * 
                     */
                    modes: any[];
                }
                module html {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/html.defaultMode.html
                     *
                     * 
                     */
                    interface defaultMode {
                        /**
                         * 
                         */
                        contains: any[];
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/javascript.html
                 *
                 * 
                 */
                interface javascript {
                    /**
                     * 
                     */
                    defaultMode: Object;
                    /**
                     * 
                     */
                    modes: any[];
                }
                module javascript {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/javascript.defaultMode.html
                     *
                     * 
                     */
                    interface defaultMode {
                        /**
                         * 
                         */
                        contains: any[];
                        /**
                         * 
                         */
                        keywords: Object;
                        /**
                         * 
                         */
                        lexems: any[];
                    }
                }

                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/xml.html
                 *
                 * 
                 */
                interface xml {
                    /**
                     * 
                     */
                    defaultMode: Object;
                    /**
                     * 
                     */
                    modes: any[];
                }
                module xml {
                    /**
                     * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/pygments/xml.defaultMode.html
                     *
                     * 
                     */
                    interface defaultMode {
                        /**
                         * 
                         */
                        contains: any[];
                    }
                }

            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/cpp.html
             *
             * C++ highlight definitions
             * 
             */
            interface cpp {
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module cpp {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/cpp.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    illegal: string;
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/css.html
             *
             * CSS Language definition file.
             * 
             */
            interface css {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module css {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/css.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    illegal: string;
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/django.html
             *
             * 
             */
            interface django {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module django {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/django.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/delphi.html
             *
             * Delphi highlight definitions
             * 
             */
            interface delphi {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module delphi {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/delphi.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    illegal: string;
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/groovy.html
             *
             * Groovy highlight definitions
             * 
             */
            interface groovy {
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                GROOVY_KEYWORDS: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module groovy {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/groovy.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    illegal: string;
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/groovy.GROOVY_KEYWORDS.html
                 *
                 * 
                 */
                interface GROOVY_KEYWORDS {
                    /**
                     * 
                     */
                    abstract: number;
                    /**
                     * 
                     */
                    assert: number;
                    /**
                     * 
                     */
                    boolean: number;
                    /**
                     * 
                     */
                    break: number;
                    /**
                     * 
                     */
                    byte: number;
                    /**
                     * 
                     */
                    case: number;
                    /**
                     * 
                     */
                    catch: number;
                    /**
                     * 
                     */
                    char: number;
                    /**
                     * 
                     */
                    class: number;
                    /**
                     * 
                     */
                    const: number;
                    /**
                     * 
                     */
                    continue: number;
                    /**
                     * 
                     */
                    def: number;
                    /**
                     * 
                     */
                    do: number;
                    /**
                     * 
                     */
                    double: number;
                    /**
                     * 
                     */
                    else: number;
                    /**
                     * 
                     */
                    extends: number;
                    /**
                     * 
                     */
                    false: number;
                    /**
                     * 
                     */
                    final: number;
                    /**
                     * 
                     */
                    finally: number;
                    /**
                     * 
                     */
                    float: number;
                    /**
                     * 
                     */
                    for: number;
                    /**
                     * 
                     */
                    goto: number;
                    /**
                     * 
                     */
                    if: number;
                    /**
                     * 
                     */
                    implements: number;
                    /**
                     * 
                     */
                    import: number;
                    /**
                     * 
                     */
                    instanceof: number;
                    /**
                     * 
                     */
                    int: number;
                    /**
                     * 
                     */
                    interface: number;
                    /**
                     * 
                     */
                    long: number;
                    /**
                     * 
                     */
                    native: number;
                    /**
                     * 
                     */
                    new: number;
                    /**
                     * 
                     */
                    package: number;
                    /**
                     * 
                     */
                    private: number;
                    /**
                     * 
                     */
                    protected: number;
                    /**
                     * 
                     */
                    public: number;
                    /**
                     * 
                     */
                    return: number;
                    /**
                     * 
                     */
                    short: number;
                    /**
                     * 
                     */
                    static: number;
                    /**
                     * 
                     */
                    strictfp: number;
                    /**
                     * 
                     */
                    super: number;
                    /**
                     * 
                     */
                    switch: number;
                    /**
                     * 
                     */
                    synchronized: number;
                    /**
                     * 
                     */
                    this: number;
                    /**
                     * 
                     */
                    throw: number;
                    /**
                     * 
                     */
                    throws: number;
                    /**
                     * 
                     */
                    transient: number;
                    /**
                     * 
                     */
                    true: number;
                    /**
                     * 
                     */
                    try: number;
                    /**
                     * 
                     */
                    void: number;
                    /**
                     * 
                     */
                    volatile: number;
                    /**
                     * 
                     */
                    while: number;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/html.html
             *
             * 
             */
            interface html {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                HTML_ATTR: Object;
                /**
                 * 
                 */
                HTML_DOCTYPE: Object;
                /**
                 * 
                 */
                HTML_TAGS: Object;
                /**
                 * 
                 */
                HTML_VALUE: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module html {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/html.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/html.HTML_ATTR.html
                 *
                 * 
                 */
                interface HTML_ATTR {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    end: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/html.HTML_VALUE.html
                 *
                 * 
                 */
                interface HTML_VALUE {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    end: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/html.HTML_DOCTYPE.html
                 *
                 * 
                 */
                interface HTML_DOCTYPE {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    end: string;
                    /**
                     * 
                     */
                    relevance: number;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/html.HTML_TAGS.html
                 *
                 * 
                 */
                interface HTML_TAGS {
                    /**
                     * 
                     */
                    a: number;
                    /**
                     * 
                     */
                    abbr: number;
                    /**
                     * 
                     */
                    acronym: number;
                    /**
                     * 
                     */
                    address: number;
                    /**
                     * 
                     */
                    applet: number;
                    /**
                     * 
                     */
                    area: number;
                    /**
                     * 
                     */
                    b: number;
                    /**
                     * 
                     */
                    base: number;
                    /**
                     * 
                     */
                    basefont: number;
                    /**
                     * 
                     */
                    bdo: number;
                    /**
                     * 
                     */
                    big: number;
                    /**
                     * 
                     */
                    blockquote: number;
                    /**
                     * 
                     */
                    body: number;
                    /**
                     * 
                     */
                    br: number;
                    /**
                     * 
                     */
                    button: number;
                    /**
                     * 
                     */
                    caption: number;
                    /**
                     * 
                     */
                    center: number;
                    /**
                     * 
                     */
                    cite: number;
                    /**
                     * 
                     */
                    code: number;
                    /**
                     * 
                     */
                    col: number;
                    /**
                     * 
                     */
                    colgroup: number;
                    /**
                     * 
                     */
                    dd: number;
                    /**
                     * 
                     */
                    del: number;
                    /**
                     * 
                     */
                    dfn: number;
                    /**
                     * 
                     */
                    dir: number;
                    /**
                     * 
                     */
                    div: number;
                    /**
                     * 
                     */
                    dl: number;
                    /**
                     * 
                     */
                    dt: number;
                    /**
                     * 
                     */
                    em: number;
                    /**
                     * 
                     */
                    fieldset: number;
                    /**
                     * 
                     */
                    font: number;
                    /**
                     * 
                     */
                    form: number;
                    /**
                     * 
                     */
                    frame: number;
                    /**
                     * 
                     */
                    frameset: number;
                    /**
                     * 
                     */
                    h1: number;
                    /**
                     * 
                     */
                    h2: number;
                    /**
                     * 
                     */
                    h3: number;
                    /**
                     * 
                     */
                    h4: number;
                    /**
                     * 
                     */
                    h5: number;
                    /**
                     * 
                     */
                    h6: number;
                    /**
                     * 
                     */
                    head: number;
                    /**
                     * 
                     */
                    hr: number;
                    /**
                     * 
                     */
                    html: number;
                    /**
                     * 
                     */
                    i: number;
                    /**
                     * 
                     */
                    iframe: number;
                    /**
                     * 
                     */
                    img: number;
                    /**
                     * 
                     */
                    input: number;
                    /**
                     * 
                     */
                    ins: number;
                    /**
                     * 
                     */
                    isindex: number;
                    /**
                     * 
                     */
                    kbd: number;
                    /**
                     * 
                     */
                    label: number;
                    /**
                     * 
                     */
                    legend: number;
                    /**
                     * 
                     */
                    li: number;
                    /**
                     * 
                     */
                    link: number;
                    /**
                     * 
                     */
                    map: number;
                    /**
                     * 
                     */
                    menu: number;
                    /**
                     * 
                     */
                    meta: number;
                    /**
                     * 
                     */
                    noframes: number;
                    /**
                     * 
                     */
                    noscript: number;
                    /**
                     * 
                     */
                    object: number;
                    /**
                     * 
                     */
                    ol: number;
                    /**
                     * 
                     */
                    optgroup: number;
                    /**
                     * 
                     */
                    option: number;
                    /**
                     * 
                     */
                    p: number;
                    /**
                     * 
                     */
                    param: number;
                    /**
                     * 
                     */
                    pre: number;
                    /**
                     * 
                     */
                    q: number;
                    /**
                     * 
                     */
                    s: number;
                    /**
                     * 
                     */
                    samp: number;
                    /**
                     * 
                     */
                    script: number;
                    /**
                     * 
                     */
                    select: number;
                    /**
                     * 
                     */
                    small: number;
                    /**
                     * 
                     */
                    span: number;
                    /**
                     * 
                     */
                    strike: number;
                    /**
                     * 
                     */
                    strong: number;
                    /**
                     * 
                     */
                    style: number;
                    /**
                     * 
                     */
                    sub: number;
                    /**
                     * 
                     */
                    sup: number;
                    /**
                     * 
                     */
                    table: number;
                    /**
                     * 
                     */
                    tbody: number;
                    /**
                     * 
                     */
                    td: number;
                    /**
                     * 
                     */
                    textarea: number;
                    /**
                     * 
                     */
                    tfoot: number;
                    /**
                     * 
                     */
                    th: number;
                    /**
                     * 
                     */
                    thead: number;
                    /**
                     * 
                     */
                    title: number;
                    /**
                     * 
                     */
                    tr: number;
                    /**
                     * 
                     */
                    tt: number;
                    /**
                     * 
                     */
                    u: number;
                    /**
                     * 
                     */
                    ul: number;
                    /**
                     * 
                     */
                    var: number;
                    /**
                     * 
                     */
                    xml: number;
                    /**
                     * 
                     */
                    xmlns: number;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/java.html
             *
             * Java highlight definitions
             * 
             */
            interface java {
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module java {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/java.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    illegal: string;
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/javascript.html
             *
             * 
             */
            interface javascript {
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module javascript {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/javascript.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/python.html
             *
             * Python highlight definitions
             * 
             */
            interface python {
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module python {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/python.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    illegal: string;
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/sql.html
             *
             * SQL highlight definitions
             * 
             */
            interface sql {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
            }
            module sql {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/sql.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xquery.html
             *
             * 
             */
            interface xquery {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
                /**
                 * 
                 */
                XQUERY_COMMENT: Object;
            }
            module xquery {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xquery.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    keywords: Object;
                    /**
                     * 
                     */
                    lexems: any[];
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xquery.XQUERY_COMMENT.html
                 *
                 * 
                 */
                interface XQUERY_COMMENT {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    end: string;
                }
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xml.html
             *
             * 
             */
            interface xml {
                /**
                 * 
                 */
                case_insensitive: boolean;
                /**
                 * 
                 */
                defaultMode: Object;
                /**
                 * 
                 */
                modes: any[];
                /**
                 * 
                 */
                XML_ATTR: Object;
                /**
                 * 
                 */
                XML_COMMENT: Object;
                /**
                 * 
                 */
                XML_VALUE: Object;
            }
            module xml {
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xml.XML_ATTR.html
                 *
                 * 
                 */
                interface XML_ATTR {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    contains: any[];
                    /**
                     * 
                     */
                    end: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xml.defaultMode.html
                 *
                 * 
                 */
                interface defaultMode {
                    /**
                     * 
                     */
                    contains: any[];
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xml.XML_VALUE.html
                 *
                 * 
                 */
                interface XML_VALUE {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    end: string;
                }
                /**
                 * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/languages/xml.XML_COMMENT.html
                 *
                 * 
                 */
                interface XML_COMMENT {
                    /**
                     * 
                     */
                    begin: string;
                    /**
                     * 
                     */
                    className: string;
                    /**
                     * 
                     */
                    end: string;
                }
            }

        }

        module widget {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/highlight/widget/Code.html
             *
             * A simple source code formatting widget that adds line numbering, alternating line colors
             * and line range support on top of dojox.highlight module.
             * 
             * @param params Hash of initialization parameters for widget, including scalar values (like title, duration etc.)and functions, typically callbacks like onClick.The hash can contain any of the widget's properties, excluding read-only properties.     
             * @param srcNodeRef       OptionalIf a srcNodeRef (DOM node) is specified:use srcNodeRef.innerHTML as my contentsif this is a behavioral widget then apply behavior to that srcNodeRefotherwise, replace srcNodeRef with my generated DOM tree     
             */
            class Code extends dijit._Widget implements dijit._Templated {
                constructor(params?: Object, srcNodeRef?: HTMLElement);
                /**
                 * Object to which attach points and events will be scoped.  Defaults
                 * to 'this'.
                 * 
                 */
                "attachScope": Object;
                set(property:"attachScope", value: Object): void;
                get(property:"attachScope"): Object;
                watch(property:"attachScope", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Deprecated. Instead of attributeMap, widget should have a _setXXXAttr attribute
                 * for each XXX attribute to be mapped to the DOM.
                 * 
                 * attributeMap sets up a "binding" between attributes (aka properties)
                 * of the widget and the widget's DOM.
                 * Changes to widget attributes listed in attributeMap will be
                 * reflected into the DOM.
                 * 
                 * For example, calling set('title', 'hello')
                 * on a TitlePane will automatically cause the TitlePane's DOM to update
                 * with the new title.
                 * 
                 * attributeMap is a hash where the key is an attribute of the widget,
                 * and the value reflects a binding to a:
                 * 
                 * DOM node attribute
                 *   focus: {node: "focusNode", type: "attribute"}
                 * Maps this.focus to this.focusNode.focus
                 * 
                 * DOM node innerHTML
                 *   title: { node: "titleNode", type: "innerHTML" }
                 * Maps this.title to this.titleNode.innerHTML
                 * 
                 * DOM node innerText
                 *   title: { node: "titleNode", type: "innerText" }
                 * Maps this.title to this.titleNode.innerText
                 * 
                 * DOM node CSS class
                 *   myClass: { node: "domNode", type: "class" }
                 * Maps this.myClass to this.domNode.className
                 * 
                 * If the value is an array, then each element in the array matches one of the
                 * formats of the above list.
                 * 
                 * There are also some shorthands for backwards compatibility:
                 * 
                 * string --> { node: string, type: "attribute" }, for example:
                 * "focusNode" ---> { node: "focusNode", type: "attribute" }
                 * "" --> { node: "domNode", type: "attribute" }
                 * 
                 */
                "attributeMap": Object;
                set(property:"attributeMap", value: Object): void;
                get(property:"attributeMap"): Object;
                watch(property:"attributeMap", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * Root CSS class of the widget (ex: dijitTextBox), used to construct CSS classes to indicate
                 * widget state.
                 * 
                 */
                "baseClass": string;
                set(property:"baseClass", value: string): void;
                get(property:"baseClass"): string;
                watch(property:"baseClass", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "class": string;
                set(property:"class", value: string): void;
                get(property:"class"): string;
                watch(property:"class", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Designates where children of the source DOM node will be placed.
                 * "Children" in this case refers to both DOM nodes and widgets.
                 * For example, for myWidget:
                 * 
                 * <div data-dojo-type=myWidget>
                 *     <b> here's a plain DOM node
                 *     <span data-dojo-type=subWidget>and a widget</span>
                 *     <i> and another plain DOM node </i>
                 * </div>
                 * containerNode would point to:
                 * 
                 * <b> here's a plain DOM node
                 * <span data-dojo-type=subWidget>and a widget</span>
                 * <i> and another plain DOM node </i>
                 * In templated widgets, "containerNode" is set via a
                 * data-dojo-attach-point assignment.
                 * 
                 * containerNode must be defined for any widget that accepts innerHTML
                 * (like ContentPane or BorderContainer or even Button), and conversely
                 * is null for widgets that don't, like TextBox.
                 * 
                 */
                "containerNode": HTMLElement;
                set(property:"containerNode", value: HTMLElement): void;
                get(property:"containerNode"): HTMLElement;
                watch(property:"containerNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * Used to provide a context require to the dojo/parser in order to be
                 * able to use relative MIDs (e.g. ./Widget) in the widget's template.
                 * 
                 */
                "contextRequire": Function;
                set(property:"contextRequire", value: Function): void;
                get(property:"contextRequire"): Function;
                watch(property:"contextRequire", callback:{(property?:string, oldValue?:Function, newValue?: Function):void}) :{unwatch():void}
                /**
                 * Bi-directional support, as defined by the HTML DIR
                 * attribute. Either left-to-right "ltr" or right-to-left "rtl".  If undefined, widgets renders in page's
                 * default direction.
                 * 
                 */
                "dir": string;
                set(property:"dir", value: string): void;
                get(property:"dir"): string;
                watch(property:"dir", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * This is our visible representation of the widget! Other DOM
                 * Nodes may by assigned to other properties, usually through the
                 * template system's data-dojo-attach-point syntax, but the domNode
                 * property is the canonical "top level" node in widget UI.
                 * 
                 */
                "domNode": HTMLElement;
                set(property:"domNode", value: HTMLElement): void;
                get(property:"domNode"): HTMLElement;
                watch(property:"domNode", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * This widget or a widget it contains has focus, or is "active" because
                 * it was recently clicked.
                 * 
                 */
                "focused": boolean;
                set(property:"focused", value: boolean): void;
                get(property:"focused"): boolean;
                watch(property:"focused", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * A unique, opaque ID string that can be assigned by users or by the
                 * system. If the developer passes an ID which is known not to be
                 * unique, the specified ID is ignored and the system-generated ID is
                 * used instead.
                 * 
                 */
                "id": string;
                set(property:"id", value: string): void;
                get(property:"id"): string;
                watch(property:"id", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "lang": string;
                set(property:"lang", value: string): void;
                get(property:"lang"): string;
                watch(property:"lang", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "listType": string;
                set(property:"listType", value: string): void;
                get(property:"listType"): string;
                watch(property:"listType", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "observer": string;
                set(property:"observer", value: string): void;
                get(property:"observer"): string;
                watch(property:"observer", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * The document this widget belongs to.  If not specified to constructor, will default to
                 * srcNodeRef.ownerDocument, or if no sourceRef specified, then to the document global
                 * 
                 */
                "ownerDocument": Object;
                set(property:"ownerDocument", value: Object): void;
                get(property:"ownerDocument"): Object;
                watch(property:"ownerDocument", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "range": Object;
                set(property:"range", value: Object): void;
                get(property:"range"): Object;
                watch(property:"range", callback:{(property?:string, oldValue?:Object, newValue?: Object):void}) :{unwatch():void}
                /**
                 * 
                 */
                "searchContainerNode": boolean;
                set(property:"searchContainerNode", value: boolean): void;
                get(property:"searchContainerNode"): boolean;
                watch(property:"searchContainerNode", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * pointer to original DOM node
                 * 
                 */
                "srcNodeRef": HTMLElement;
                set(property:"srcNodeRef", value: HTMLElement): void;
                get(property:"srcNodeRef"): HTMLElement;
                watch(property:"srcNodeRef", callback:{(property?:string, oldValue?:HTMLElement, newValue?: HTMLElement):void}) :{unwatch():void}
                /**
                 * 
                 */
                "style": string;
                set(property:"style", value: string): void;
                get(property:"style"): string;
                watch(property:"style", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Path to template (HTML file) for this widget relative to dojo.baseUrl.
                 * Deprecated: use templateString with require([... "dojo/text!..."], ...) instead
                 * 
                 */
                "templatePath": string;
                set(property:"templatePath", value: string): void;
                get(property:"templatePath"): string;
                watch(property:"templatePath", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "templateString": string;
                set(property:"templateString", value: string): void;
                get(property:"templateString"): string;
                watch(property:"templateString", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * HTML title attribute.
                 * 
                 * For form widgets this specifies a tooltip to display when hovering over
                 * the widget (just like the native HTML title attribute).
                 * 
                 * For TitlePane or for when this widget is a child of a TabContainer, AccordionContainer,
                 * etc., it's used to specify the tab label, accordion pane title, etc.  In this case it's
                 * interpreted as HTML.
                 * 
                 */
                "title": string;
                set(property:"title", value: string): void;
                get(property:"title"): string;
                watch(property:"title", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * When this widget's title attribute is used to for a tab label, accordion pane title, etc.,
                 * this specifies the tooltip to appear when the mouse is hovered over that text.
                 * 
                 */
                "tooltip": string;
                set(property:"tooltip", value: string): void;
                get(property:"tooltip"): string;
                watch(property:"tooltip", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * 
                 */
                "url": string;
                set(property:"url", value: string): void;
                get(property:"url"): string;
                watch(property:"url", callback:{(property?:string, oldValue?:string, newValue?: string):void}) :{unwatch():void}
                /**
                 * Should we parse the template to find widgets that might be
                 * declared in markup inside it?  False by default.
                 * 
                 */
                "widgetsInTemplate": boolean;
                set(property:"widgetsInTemplate", value: boolean): void;
                get(property:"widgetsInTemplate"): boolean;
                watch(property:"widgetsInTemplate", callback:{(property?:string, oldValue?:boolean, newValue?: boolean):void}) :{unwatch():void}
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: String, value: Object): any;
                /**
                 * This method is deprecated, use get() or set() directly.
                 * 
                 * @param name The property to get or set. If an object is passed here and nota string, its keys are used as names of attributes to be setand the value of the object as values to set in the widget.             
                 * @param value               OptionalOptional. If provided, attr() operates as a setter. If omitted,the current value of the named property is returned.             
                 */
                attr(name: Object, value: Object): any;
                /**
                 * Construct the UI for this widget, setting this.domNode.
                 * Most widgets will mixin dijit._TemplatedMixin, which implements this method.
                 * 
                 */
                buildRendering(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: String): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: String, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: Object, event: Function, method: Function): any;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(on(...)) or this.own(aspect.after(...)) instead.
                 * 
                 * Connects specified obj/event to specified method of this object
                 * and registers for disconnect() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.connect, except with the
                 * implicit use of this widget as the target object.
                 * Events connected with this.connect are disconnected upon
                 * destruction.
                 * 
                 * @param obj             
                 * @param event             
                 * @param method             
                 */
                connect(obj: any, event: Function, method: Function): any;
                /**
                 * Wrapper to setTimeout to avoid deferred functions executing
                 * after the originating widget has been destroyed.
                 * Returns an object handle with a remove method (that returns null) (replaces clearTimeout).
                 * 
                 * @param fcn Function reference.             
                 * @param delay               OptionalDelay, defaults to 0.             
                 */
                defer(fcn: Function, delay: number): Object;
                /**
                 * Destroy this widget, but not its descendants.  Descendants means widgets inside of
                 * this.containerNode.   Will also destroy any resources (including widgets) registered via this.own().
                 * 
                 * This method will also destroy internal widgets such as those created from a template,
                 * assuming those widgets exist inside of this.domNode but outside of this.containerNode.
                 * 
                 * For 2.0 it's planned that this method will also destroy descendant widgets, so apps should not
                 * depend on the current ability to destroy a widget without destroying its descendants.   Generally
                 * they should use destroyRecursive() for widgets with children.
                 * 
                 * @param preserveDom If true, this method will leave the original DOM structure alone.Note: This will not yet work with _TemplatedMixin widgets             
                 */
                destroy(preserveDom?: boolean): void;
                /**
                 * Recursively destroy the children of this widget and their
                 * descendants.
                 * 
                 * @param preserveDom               OptionalIf true, the preserveDom attribute is passed to all descendantwidget's .destroy() method. Not for use with _Templatedwidgets.             
                 */
                destroyDescendants(preserveDom: boolean): void;
                /**
                 * Destroy this widget and its descendants
                 * This is the generic "destructor" function that all widget users
                 * should call to cleanly discard with a widget. Once a widget is
                 * destroyed, it is removed from the manager object.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structurealone of descendant Widgets. Note: This will NOT work withdijit._TemplatedMixin widgets.             
                 */
                destroyRecursive(preserveDom: boolean): void;
                /**
                 * Destroys the DOM nodes associated with this widget.
                 * 
                 * @param preserveDom               OptionalIf true, this method will leave the original DOM structure aloneduring tear-down. Note: this will not work with _Templatedwidgets yet.             
                 */
                destroyRendering(preserveDom?: boolean): void;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Disconnects handle created by connect.
                 * 
                 * @param handle             
                 */
                disconnect(handle: any): void;
                /**
                 * Used by widgets to signal that a synthetic event occurred, ex:
                 * 
                 * myWidget.emit("attrmodified-selectedChildWidget", {}).
                 * Emits an event on this.domNode named type.toLowerCase(), based on eventObj.
                 * Also calls onType() method, if present, and returns value from that method.
                 * By default passes eventObj to callback, but will pass callbackArgs instead, if specified.
                 * Modifies eventObj by adding missing parameters (bubbles, cancelable, widget).
                 * 
                 * @param type             
                 * @param eventObj               Optional            
                 * @param callbackArgs               Optional            
                 */
                emit(type: String, eventObj: Object, callbackArgs: any[]): any;
                /**
                 * Get a property from a widget.
                 * Get a named property from a widget. The property may
                 * potentially be retrieved via a getter method. If no getter is defined, this
                 * just retrieves the object's property.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _getFooAttr(), calling:
                 * myWidget.get("foo") would be equivalent to calling
                 * widget._getFooAttr() and myWidget.get("bar")
                 * would be equivalent to the expression
                 * widget.bar2
                 * 
                 * @param name The property to get.             
                 */
                get(name: any): any;
                /**
                 * Returns all direct children of this widget, i.e. all widgets underneath this.containerNode whose parent
                 * is this widget.   Note that it does not return all descendants, but rather just direct children.
                 * Analogous to Node.childNodes,
                 * except containing widgets rather than DOMNodes.
                 * 
                 * The result intentionally excludes internally created widgets (a.k.a. supporting widgets)
                 * outside of this.containerNode.
                 * 
                 * Note that the array returned is a simple array.  Application code should not assume
                 * existence of methods like forEach().
                 * 
                 */
                getChildren(): any[];
                /**
                 * Returns all the widgets contained by this, i.e., all widgets underneath this.containerNode.
                 * This method should generally be avoided as it returns widgets declared in templates, which are
                 * supposed to be internal/hidden, but it's left here for back-compat reasons.
                 * 
                 */
                getDescendants(): any[];
                /**
                 * Returns the parent widget of this widget.
                 * 
                 */
                getParent(): any;
                /**
                 * Return true if this widget can currently be focused
                 * and false if not
                 * 
                 */
                isFocusable(): any;
                /**
                 * Return this widget's explicit or implicit orientation (true for LTR, false for RTL)
                 * 
                 */
                isLeftToRight(): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: String, func: Function): any;
                /**
                 * 
                 * @param type protected             
                 * @param func             
                 */
                on(type: Function, func: Function): any;
                /**
                 * Track specified handles and remove/destroy them when this instance is destroyed, unless they were
                 * already removed/destroyed manually.
                 * 
                 */
                own(): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: String): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: String, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: HTMLElement, position: number): any;
                /**
                 * Place this widget somewhere in the DOM based
                 * on standard domConstruct.place() conventions.
                 * A convenience function provided in all _Widgets, providing a simple
                 * shorthand mechanism to put an existing (or newly created) Widget
                 * somewhere in the dom, and allow chaining.
                 * 
                 * @param reference Widget, DOMNode, or id of widget or DOMNode             
                 * @param position               OptionalIf reference is a widget (or id of widget), and that widget has an ".addChild" method,it will be called passing this widget instance into that method, supplying the optionalposition index passed.  In this case position (if specified) should be an integer.If reference is a DOMNode (or id matching a DOMNode but not a widget),the position argument can be a numeric index or a string"first", "last", "before", or "after", same as dojo/dom-construct::place().             
                 */
                placeAt(reference: dijit._WidgetBase, position: number): any;
                /**
                 * 
                 */
                postCreate(): void;
                /**
                 * Called after the parameters to the widget have been read-in,
                 * but before the widget template is instantiated. Especially
                 * useful to set properties that are referenced in the widget
                 * template.
                 * 
                 */
                postMixInProperties(): void;
                /**
                 * Set a property on a widget
                 * Sets named properties on a widget which may potentially be handled by a
                 * setter in the widget.
                 * 
                 * For example, if the widget has properties foo and bar
                 * and a method named _setFooAttr(), calling
                 * myWidget.set("foo", "Howdy!") would be equivalent to calling
                 * widget._setFooAttr("Howdy!") and myWidget.set("bar", 3)
                 * would be equivalent to the statement widget.bar = 3;
                 * 
                 * set() may also be called with a hash of name/value pairs, ex:
                 * 
                 * myWidget.set({
                 *     foo: "Howdy",
                 *     bar: 3
                 * });
                 * This is equivalent to calling set(foo, "Howdy") and set(bar, 3)
                 * 
                 * @param name The property to set.             
                 * @param value The value to set in the property.             
                 */
                set(name: any, value: any): any;
                /**
                 * Deprecated.  Use set() instead.
                 * 
                 * @param attr             
                 * @param value             
                 */
                setAttribute(attr: String, value: any): void;
                /**
                 * update the view to a new passed range
                 * 
                 * @param range             
                 */
                setRange(range: any[]): void;
                /**
                 * Processing after the DOM fragment is added to the document
                 * Called after a widget and its children have been created and added to the page,
                 * and all related widgets have finished their create() cycle, up through postCreate().
                 * 
                 * Note that startup() may be called while the widget is still hidden, for example if the widget is
                 * inside a hidden dijit/Dialog or an unselected tab of a dijit/layout/TabContainer.
                 * For widgets that need to do layout, it's best to put that layout code inside resize(), and then
                 * extend dijit/layout/_LayoutWidget so that resize() is called when the widget is visible.
                 * 
                 */
                startup(): void;
                /**
                 * Deprecated, will be removed in 2.0, use this.own(topic.subscribe()) instead.
                 * 
                 * Subscribes to the specified topic and calls the specified method
                 * of this object and registers for unsubscribe() on widget destroy.
                 * 
                 * Provide widget-specific analog to dojo.subscribe, except with the
                 * implicit use of this widget as the target object.
                 * 
                 * @param t The topic             
                 * @param method The callback             
                 */
                subscribe(t: String, method: Function): any;
                /**
                 * Returns a string that represents the widget.
                 * When a widget is cast to a string, this method will be used to generate the
                 * output. Currently, it does not implement any sort of reversible
                 * serialization.
                 * 
                 */
                toString(): String;
                /**
                 * Deprecated. Override destroy() instead to implement custom widget tear-down
                 * behavior.
                 * 
                 */
                uninitialize(): boolean;
                /**
                 * Deprecated, will be removed in 2.0, use handle.remove() instead.
                 * 
                 * Unsubscribes handle created by this.subscribe.
                 * Also removes handle from this widget's list of subscriptions
                 * 
                 * @param handle             
                 */
                unsubscribe(handle: Object): void;
                /**
                 * Watches a property for changes
                 * 
                 * @param name               OptionalIndicates the property to watch. This is optional (the callback may be theonly parameter), and if omitted, all the properties will be watched             
                 * @param callback The function to execute when the property changes. This will be called afterthe property has been changed. The callback will be called with the |this|set to the instance, the first argument as the name of the property, thesecond argument as the old value and the third argument as the new value.             
                 */
                watch(property: string, callback:{(property?:string, oldValue?:any, newValue?: any):void}) :{unwatch():void};
                /**
                 * Static method to get a template based on the templatePath or
                 * templateString key
                 */
                getCachedTemplate(): any;
                /**
                 * Called when the widget stops being "active" because
                 * focus moved to something outside of it, or the user
                 * clicked somewhere outside of it, or the widget was
                 * hidden.
                 * 
                 */
                onBlur(): void;
                /**
                 * Connect to this function to receive notifications of mouse click events.
                 * 
                 * @param event mouse Event             
                 */
                onClick(event: any): void;
                /**
                 * Called when this widget is being displayed as a popup (ex: a Calendar popped
                 * up from a DateTextBox), and it is hidden.
                 * This is called from the dijit.popup code, and should not be called directly.
                 * 
                 * Also used as a parameter for children of dijit/layout/StackContainer or subclasses.
                 * Callback if a user tries to close the child.   Child will be closed if this function returns true.
                 * 
                 */
                onClose(): boolean;
                /**
                 * Connect to this function to receive notifications of mouse double click events.
                 * 
                 * @param event mouse Event             
                 */
                onDblClick(event: any): void;
                /**
                 * Called when the widget becomes "active" because
                 * it or a widget inside of it either has focus, or has recently
                 * been clicked.
                 * 
                 */
                onFocus(): void;
                /**
                 * Called when another widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate hide of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onHide(): void;
                /**
                 * Connect to this function to receive notifications of keys being pressed down.
                 * 
                 * @param event key Event             
                 */
                onKeyDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of printable keys being typed.
                 * 
                 * @param event key Event             
                 */
                onKeyPress(event: any): void;
                /**
                 * Connect to this function to receive notifications of keys being released.
                 * 
                 * @param event key Event             
                 */
                onKeyUp(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is pressed down.
                 * 
                 * @param event mouse Event             
                 */
                onMouseDown(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseEnter(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseLeave(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves over nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseMove(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves off of nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOut(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse moves onto nodes contained within this widget.
                 * 
                 * @param event mouse Event             
                 */
                onMouseOver(event: any): void;
                /**
                 * Connect to this function to receive notifications of when the mouse button is released.
                 * 
                 * @param event mouse Event             
                 */
                onMouseUp(event: any): void;
                /**
                 * Called when this widget becomes the selected pane in a
                 * dijit/layout/TabContainer, dijit/layout/StackContainer,
                 * dijit/layout/AccordionContainer, etc.
                 * 
                 * Also called to indicate display of a dijit.Dialog, dijit.TooltipDialog, or dijit.TitlePane.
                 * 
                 */
                onShow(): void;
            }
        }

    }

}