// Type definitions for gl-react-headless 3.15
// Project: https://github.com/gre/gl-react
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as glReact from 'gl-react';

export interface SurfaceProps extends glReact.SurfaceProps {
  width: number;
  height: number;
}

export class Surface extends glReact.Surface {
  props: SurfaceProps;
}
