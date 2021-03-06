import { gapCursor } from 'prosemirror-gapcursor';
import { Plugin } from 'prosemirror-state';
import { NodeSpec } from 'prosemirror-model';

const gapCursorPlugin: Plugin = gapCursor();

export const nodeSpec: NodeSpec = {
    allowGapCursor: false,
};

// $ExpectError
export const nodeSpecErr: NodeSpec = {
    allowGapCursor: 0,
}


// We want to make sure the type of spec.allowGapCursor is defined, i.e., not any

// $ExpectType boolean
nodeSpec.allowGapCursor

// $ExpectType any
nodeSpec.this_prop_does_not_exist
