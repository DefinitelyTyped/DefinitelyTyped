"use strict";

import SassLoader from "sass-loader";

declare const content: string;

// $ExpectType void
SassLoader(content);

const loaderOptions: SassLoader.Options = {
  additionalData: '$env: "development";',
  warnRuleAsWarning: true,
  sourceMap: true,
  sassOptions: {
    sourceMap: true,
  },
  webpackImporter: true,
};
