// Type definitions for ink-gradient 2.0
// Project: https://github.com/sindresorhus/ink-gradient
// Definitions by: aaronleopold <https://github.com/aaronleopold>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

// This needs to be updated when TypeScript enhances their support for mutual
// exclusivity in properties. While I am defining the props as being either one with
// name OR one with colors, and the type reflects this on hover, it doesnt throw any lint errors
// when I disobey this type contstraint.
type PropsColor =
    | {
          name:
              | 'cristal'
              | 'teen'
              | 'mind'
              | 'morning'
              | 'vice'
              | 'passion'
              | 'fruit'
              | 'instagram'
              | 'atlas'
              | 'retro'
              | 'summer'
              | 'pastel'
              | 'rainbow';
      }
    | {
          colors: string[] | object[];
      };

// note, object[] in this case refers to objects interpretable by tinycolor2

type GradientProps = {
    children: React.ReactNode;
} & PropsColor;

declare const Gradient: React.FC<GradientProps>;
export = Gradient;
