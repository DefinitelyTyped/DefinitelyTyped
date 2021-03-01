import { gapCursor } from 'prosemirror-gapcursor';
import { Plugin } from 'prosemirror-state';
import * as model from 'prosemirror-model';

const gapCursorPlugin: Plugin = gapCursor();

export const nodeSpec: model.NodeSpec = {
    attrs: {
        name: { default: '' },
    },
    parseDOM: [
        {
            tag: 'span[data-name]',
            getAttrs(dom) {
                if (dom instanceof HTMLElement) {
                    return {
                        name: dom.getAttribute('data-name')!,
                    };
                }
            },
        },
    ],
    toDOM(node) {
        const { name } = node.attrs;
        const attrs = {
            'data-emoji-name': name,
        };
        return ['span', attrs, 0];
    },
    allowGapCursor: false,
};
