import { MarkdownParser, MarkdownSerializer } from 'prosemirror-markdown';
import { Schema, Node as ProsemirrorNode, Mark, Fragment } from 'prosemirror-model';
import md = require('markdown-it');

/**
 * Parses markdown content into a ProsemirrorNode compatible with the provided schema.
 */
export const fromMarkdown = (markdown: string, schema: Schema) =>
    new MarkdownParser(schema, md('commonmark'), {
        blockquote: { block: 'blockquote' },
        paragraph: { block: 'paragraph' },
        list_item: { block: 'listItem' },
        bullet_list: { block: 'bulletList' },
        ordered_list: {
            block: 'orderedList',
            getAttrs: tok => ({ order: parseInt(tok.attrGet('order') || '1', 10) }),
        },
        heading: { block: 'heading', getAttrs: tok => ({ level: +tok.tag.slice(1) }) },
        code_block: { block: 'codeBlock' },
        fence: { block: 'codeBlock', getAttrs: tok => ({ params: tok.info || '' }) },
        hr: { node: 'horizontalRule' },
        image: {
            node: 'image',
            getAttrs: tok => ({
                src: tok.attrGet('src'),
                title: tok.attrGet('title') || null,
                alt: (tok.children[0] && tok.children[0].content) || null,
            }),
        },
        hardbreak: { node: 'hardBreak' },
        em: { mark: 'italic' },
        strong: { mark: 'bold' },
        link: {
            mark: 'link',
            getAttrs: tok => ({
                href: tok.attrGet('href'),
                title: tok.attrGet('title') || null,
            }),
        },
        code_inline: { mark: 'code' },
    }).parse(markdown);

export const toMarkdown = (content: ProsemirrorNode) =>
    new MarkdownSerializer(
        {
            blockquote(state, node) {
                state.wrapBlock('> ', undefined, node, () => state.renderContent(node));
            },
            codeBlock(state, node) {
                // tslint:disable-next-line: prefer-template
                state.write('```' + (node.attrs.language || '') + '\n');
                state.text(node.textContent, false);
                state.ensureNewLine();
                state.write('```');
                state.closeBlock(node);
            },
            heading(state, node) {
                state.write(state.repeat('#', node.attrs.level) + ' ');
                state.renderInline(node);
                state.closeBlock(node);
            },
            horizontalRule(state, node) {
                state.write(node.attrs.markup || '---');
                state.closeBlock(node);
            },
            bulletList(state, node) {
                state.renderList(node, '  ', () => (node.attrs.bullet || '*') + ' ');
            },
            orderedList(state, node) {
                const start = node.attrs.order || 1;
                const maxW = String(start + node.childCount - 1).length;
                const space = state.repeat(' ', maxW + 2);
                state.renderList(node, space, i => {
                    const nStr = String(start + i);
                    // tslint:disable-next-line: prefer-template
                    return state.repeat(' ', maxW - nStr.length) + nStr + '. ';
                });
            },
            listItem(state, node) {
                state.renderContent(node);
            },
            paragraph(state, node) {
                console.log(state, node);
                state.renderInline(node);
                state.closeBlock(node);
            },
            image(state, node) {
                state.write(
                    // tslint:disable-next-line: prefer-template
                    '![' +
                        state.esc(node.attrs.alt || '') +
                        '](' +
                        state.esc(node.attrs.src) +
                        (node.attrs.title ? ' ' + state.quote(node.attrs.title) : '') +
                        ')',
                );
            },
            hardBreak(state, node, parent, index) {
                for (let i = index + 1; i < parent.childCount; i++) {
                    if (parent.child(i).type !== node.type) {
                        state.write('\\\n');
                        return;
                    }
                }
            },
            text(state, node) {
                if (!node.text) {
                    return;
                }
                state.text(node.text);
            },
        },
        {
            italic: { open: '*', close: '*', mixable: true, expelEnclosingWhitespace: true },
            bold: { open: '**', close: '**', mixable: true, expelEnclosingWhitespace: true },
            link: {
                open(_state, mark, parent, index) {
                    return isPlainURL(mark, parent, index, 1) ? '<' : '[';
                },
                close(state, mark, parent, index) {
                    return isPlainURL(mark, parent, index, -1)
                        ? '>'
                        : // tslint:disable-next-line: prefer-template
                          '](' +
                              state.esc(mark.attrs.href) +
                              (mark.attrs.title ? ' ' + state.quote(mark.attrs.title) : '') +
                              ')';
                },
            },
            code: {
                open(_state, _mark, parent, index) {
                    return backticksFor(parent.child(index), -1);
                },
                close(_state, _mark, parent, index) {
                    return backticksFor(parent.child(index - 1), 1);
                },
                escape: false,
            },
        },
    ).serialize(content);

type Side = -1 | 1;

function isPlainURL(link: Mark, parent: Fragment, index: number, side: Side) {
    if (link.attrs.title) {
        return false;
    }

    const content = parent.child(index + (side < 0 ? -1 : 0));
    if (!content.isText || content.text !== link.attrs.href || content.marks[content.marks.length - 1] !== link) {
        return false;
    }
    if (index === (side < 0 ? 1 : parent.childCount - 1)) {
        return true;
    }
    const next = parent.child(index + (side < 0 ? -2 : 1));
    return !link.isInSet(next.marks);
}

function backticksFor(node: ProsemirrorNode, side: Side) {
    const ticks = /`+/g;
    let m;
    let len = 0;
    if (node.isText) {
        // tslint:disable-next-line:no-conditional-assignment
        while ((m = ticks.exec(node.text!))) {
            len = Math.max(len, m[0].length);
        }
    }
    let result = len > 0 && side > 0 ? ' `' : '`';
    for (let i = 0; i < len; i++) {
        result += '`';
    }
    if (len > 0 && side < 0) {
        result += ' ';
    }
    return result;
}
