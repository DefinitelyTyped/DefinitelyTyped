"use strict";

import { ReplaceEntries, ReplaceEntry, Options } from "string-replace-loader";

declare const options: Options;
options; // $ExpectType Options

declare const entries: ReplaceEntries;
entries.multiple; // $ExpectType ReplaceEntry[]

declare const entry: ReplaceEntry;
entry.search; // $ExpectType string | RegExp
entry.replace; // $ExpectType string | ReplaceCallback
entry.flags; // $ExpectType string | undefined
entry.strict; // $ExpectType boolean | undefined
