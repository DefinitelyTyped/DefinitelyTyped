import type escape from "./implementation";

declare function shimRegExpEscape(): typeof escape;
export = shimRegExpEscape;
