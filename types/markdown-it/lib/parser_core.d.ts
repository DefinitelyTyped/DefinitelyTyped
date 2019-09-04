import MarkdownIt = require(".");
import Ruler = require("./ruler");
import Token = require("./token");
import StateCore = require("./rules_core/state_core");

export = ParserCore;

declare class ParserCore {
    process(state: any): void;
    ruler: Ruler;
    State: StateCore
}
