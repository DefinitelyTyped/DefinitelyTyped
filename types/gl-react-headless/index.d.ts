// Type definitions for gl-react-headless 3.15
// Project: https://github.com/gre/gl-react
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as glReact from 'gl-react';
import { GLViewHeadless, GLViewHeadlessProps } from './GLViewHeadless';

export interface SurfaceProps extends glReact.SurfaceProps, GLViewHeadlessProps {}

export class Surface extends glReact.Surface<GLViewHeadless> {
  props: SurfaceProps;
}
