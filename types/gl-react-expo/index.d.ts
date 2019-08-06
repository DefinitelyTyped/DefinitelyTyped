// Type definitions for gl-react-expo 3.16
// Project: https://github.com/gre/gl-react
// Definitions by: Jussi Kinnula <https://github.com/jussikinnula>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as glReact from 'gl-react';
import { GLViewNative, GLViewNativeProps } from './GLViewNative';

export interface SurfaceProps extends glReact.SurfaceProps, GLViewNativeProps {}

export class Surface extends glReact.Surface<GLViewNative> {
  props: SurfaceProps;
}
