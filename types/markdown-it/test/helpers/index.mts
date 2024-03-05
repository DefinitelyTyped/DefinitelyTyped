import StateInline from "markdown-it/lib/rules_inline/state_inline.mjs";
import { parseLinkDestination, parseLinkLabel, parseLinkTitle } from "markdown-it/lib/helpers/index.mjs";

declare const state: StateInline;

parseLinkLabel(state, 0, true);
parseLinkDestination("https://github.com/markdown-it/markdown-it", 0, 3);
parseLinkTitle("https://github.com/markdown-it/markdown-it", 0, 3);
