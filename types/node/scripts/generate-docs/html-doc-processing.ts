import { TranslatorConfigFactory, TranslatorConfigObject, NodeHtmlMarkdown } from "node-html-markdown";
import { Node, HTMLElement } from 'node-html-parser';

/**
 * Gets previous sibling, can't use prev sibling dom APIs as not available...
 */
function getPreviousSibling(node: Node): Node | undefined {
    const parent = node.parentNode;
    for (let i = 0; i < parent.childNodes.length; ++i) {
        if (parent.childNodes[i] === node) {
            return parent.childNodes[i - 1]!;
        }
    }
    return;
}

function handleRelativeLink(node: HTMLElement, context: DocContext): string {
    let content = '';
    if (node.textContent?.startsWith(`${context.moduleName}.`)) {
        let symbolName = node.textContent.slice(context.moduleName.length + 1); // slice off module prefix
        symbolName = symbolName.replace(/\(.*?\)/, ''); // remove call as it causes weird formatting
        content = `{@link ${symbolName}}`;
    } else {
        // TODO: Handle cross module links
        content = `\`${node.textContent}\``;
    }
    const prevSiblingLastChar = getPreviousSibling(node)?.textContent?.slice(-1) ?? '';
    if (prevSiblingLastChar.match(/[a-z]/i)) {
        content = ' ' + content;
    }
    // newlines are removed after links which looks ugly
    const nextSiblingFirstChar = node.nextSibling?.textContent?.[0] ?? '';
    if (nextSiblingFirstChar.match(/[a-z]/i)) {
        content = content + ' ';
    }
    return content;
}

function makeLinkTranslator(context: DocContext): TranslatorConfigFactory {
    return ({ node }) => {
        const href = node.getAttribute('href');
        if (!href) {
            return {};
        }
        // is there an easier way? Probably! yolo
        if (new URL(href, 'https://relative').hostname === 'relative') {
            return {
                content: handleRelativeLink(node as HTMLElement, context)
            };
        }

        const title = node.getAttribute('title');

        return {
            postprocess: ({ content }) => content.replace(/(?:\r?\n)+/g, ' '),
            prefix: '[',
            postfix: `](${href}${title ? ` "${title}"` : ''})`
        };
    };
}

const customTranslators: TranslatorConfigObject = {
    // omit tables for now
    table: {
        content: "<omitted>"
    },
    ul: ({ listKind }) => ({
        surroundingNewlines: listKind ? 1 : 2,
        postprocess(context) {
            // kill lists with messed up types
            if (context.content.match(/&lt;(\w+)&gt;/)) {
                return '';
            }
            return context.content;
        }
    })
};

function makeCustomTranslators(context: DocContext) {
    return { ...customTranslators, a: makeLinkTranslator(context) };
}

interface DocContext {
    moduleName: string;
}

export function fixupLocalLinks(text: string, moduleName: string): string {
    // handle weird "[`prefix.fnName()`][]" links
    return text.replaceAll(/\[`(?:(.*?)\.)?(.*?)(\(\))?`\]\[\]/g, (_all, prefix: string | null, name: string) => {
        if (!prefix || prefix === moduleName) {
            return `{@link ${name}}`;
        }
        return `\`${name}\``;
    })
    // handle weird "[`ref` name][]" links
    .replaceAll(/\[`(.*?)` (.*?)\]\[\]/g, '`$1` $2')
    // handle weird "[ref][]" links
    .replaceAll(/\[(.*?)\]\[\]/g, '`$1`');
}

export function fixupHtmlDocs(input: string, context: DocContext): string {
    // make sure code highlighting works

    // This is not fast but it will do, also he is definitely coming for us now.
    const hasMultiExample = /<pre><code class="language-mjs">.*?<\/code><\/pre>\n+<pre><code class="language-cjs">.*?<\/code><\/pre>/igms;
    if (hasMultiExample) {
        input = input.replace(/<pre><code class="language-cjs">.*?<\/code><\/pre>/igms, '');
    }

    input = input.replaceAll(/language\-[mc]js/g, 'language-js');
    // fixup breaking comments
    input = input.replace(/\/\*(.*?)\*\//g, '//$1');
    let output = NodeHtmlMarkdown.translate(input, {}, makeCustomTranslators(context));
    // remove redundant escaping of `<` (currently only used in code blocks)
    output = output.replaceAll('&#x3C;', '<');
    return output;
}
