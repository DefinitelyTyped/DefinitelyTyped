import State = require('../rules_core/state_core');

declare function parseLinkLabel(state: State, start: number, disableNested?: boolean): number;

export = parseLinkLabel;
