import * as keymap from 'prosemirror-keymap';
import { Plugin } from 'prosemirror-state';

const plugin1: Plugin = keymap.keymap({
    // Test that the argument types are correctly inferred
    Enter: (state, dispatch, view) => {
        if (dispatch) {
            dispatch(state.tr.insertText('hello'));
        }
        return true;
    },
});

const plugin2 = new Plugin({
    props: {
        handleKeyDown: keymap.keydownHandler({
            // Test that the argument types are correctly inferred
            Enter: (state, dispatch, view) => {
                if (dispatch) {
                    dispatch(state.tr.insertText('hello'));
                }
                return true;
            },
        }),
    },
});

// Handlers must return a boolean
// @ts-expect-error
keymap.keydownHandler({ Enter: () => {} });
