import { gapCursor } from 'prosemirror-gapcursor';
import { Plugin } from 'prosemirror-state';
import { NodeSpec } from 'prosemirror-model';

const gapCursorPlugin: Plugin = gapCursor();

export const nodeSpec: NodeSpec = {
    allowGapCursor: false,
};

export const nodeSpecErr: NodeSpec = {
    allowGapCursor: "not a boolean value", // $ExpectError
};

// We want to make sure the type of spec.allowGapCursor is defined, i.e., not any

// $ExpectType boolean | undefined
nodeSpec.allowGapCursor;

// $ExpectType any
nodeSpec.this_prop_does_not_exist;
