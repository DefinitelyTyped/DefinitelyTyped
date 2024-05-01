import StateInline from "../rules_inline/state_inline.mjs";

declare function parseLinkLabel(state: StateInline, start: number, disableNested?: boolean): number;

export default parseLinkLabel;
