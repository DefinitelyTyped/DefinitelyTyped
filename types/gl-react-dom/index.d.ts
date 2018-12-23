// Type definitions for gl-react-dom 3.15
// Project: https://github.com/gre/gl-react
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as glReact from 'gl-react';
import { GLViewDOM, GLViewDOMProps } from './GLViewDOM';

export interface SurfaceProps extends glReact.SurfaceProps, GLViewDOMProps {}

export class Surface extends glReact.Surface<GLViewDOM> {
  props: SurfaceProps;
}
