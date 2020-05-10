import StateInline = require('../rules_inline/state_inline');

declare namespace parseLinkLabel {}

declare function parseLinkLabel(state: StateInline, start: number, disableNested?: boolean): number;

export = parseLinkLabel;
