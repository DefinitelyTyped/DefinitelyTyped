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

/**
 * We want to make sure the type of spec.allowGapCursor is defined, i.e., not any, and
 * I couldn't find another straightforward way to write a test that fails.
 */
type IsAnyOrUnknownTest = <T>(x: T) => unknown extends typeof x ? true : false;
const isAnyOrUnknown = {} as IsAnyOrUnknownTest

// Proof of concept to convince the reader the above type works
const testAny: true =  isAnyOrUnknown({} as any);
const testUnknown: true = isAnyOrUnknown({} as unknown);

const testNull: false = isAnyOrUnknown(null);
const testBoolean: false = isAnyOrUnknown(true);
const testBooleanOrUndefined: false = isAnyOrUnknown(false as boolean | undefined);
const testUndefined: false = isAnyOrUnknown(undefined);

const spec: NodeSpec = {} as NodeSpec;
const allowGapCursorIsDefined: false = isAnyOrUnknown(spec.allowGapCursor)
