import parser, { Tag, Parser } from 'bbcode-to-react';

// $ExpectType void
parser.registerTag('br', Tag);

// $ExpectType string
parser.toHTML('[B]strong[/B]');

// $ExpectType ReactNode
parser.toReact('[B]strong[/B]');

new (class extends Parser {
    testParser() {
        // $ExpectType { [name: string]: Tag<{ linkify: boolean; }>; }
        this.tags;

        // $ExpectType Renderer<{ linkify: boolean; }>
        this.renderer;

        // $ExpectType Tag<{ linkify: boolean; }>
        this.parse('');
    }

    testRenderer() {
        // $ExpectType { linkify: boolean; }
        this.renderer.options;

        // $ExpectType { linkify: boolean; }[]
        this.renderer.contexts;

        // $ExpectType () => string[]
        this.renderer.context({ linkify: false }, () => ['']);

        // $ExpectType string
        this.renderer.escape('');

        // $ExpectType string
        this.renderer.linkify('');

        // $ExpectType string
        this.renderer.strip('');

        // $ExpectType string
        this.renderer.cosmeticReplace('');
    }

    testTag() {
        new (class extends Tag {
            tagMethod() {
                // @ExpectedType string
                this.name;

                // @ExpectedType ReactNode
                this.parent;

                // @ExpectedType String
                this.text;

                // @ExpectedType object
                this.params;

                // @ExpectedType ReactNode
                this.children;

                // @ExpectedType ReactNode
                this.getComponents();

                // @ExpectedType string
                this.getContent();

                // @ExpectedType string
                this.toHTML();

                // @ExpectedType ReactNode
                this.toReact();
            }
        })(this.renderer);
    }
})();

new (class extends Parser<{ canEscape: boolean }> {
    testParser() {
        // $ExpectType Renderer<{ canEscape: boolean; }>
        this.renderer;
    }

    testRenderer() {
        // $ExpectType { canEscape: boolean; }
        this.renderer.options;

        // $ExpectType { canEscape: boolean; }[]
        this.renderer.contexts;
    }
})();
