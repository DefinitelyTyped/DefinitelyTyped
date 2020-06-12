"use strict";

import SassLoader from "sass-loader";

declare const content: string;

// $ExpectType void
SassLoader(content);
