// Type definitions for react-motion
// Project: https://github.com/chenglou/react-motion
// Definitions by: Stepan Mikhaylyuk <https://github.com/stepancar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-motion" {
    import { Component } from 'react';
    
    interface SpringHelperConfig {
        stiffness: number;
        damping: number;
        precision?: number;
        // TODO: add onRest. Not public yet
    }
    
    interface MotionProps {
      defaultStyle?: any;
      style: any;
    };

    // === StaggeredMotion ===
    /*export type StaggeredProps = {
      defaultStyles?: Array<PlainStyle>,
      styles: (previousInterpolatedStyles: ?Array<PlainStyle>) => Array<Style>,
      children: (interpolatedStyles: Array<PlainStyle>) => ReactElement,
    };*/
    
    export interface OpaqueConfig {
      val: number;
      stiffness: number;
      damping: number;
      precision: number;
      // TODO: add onRest. Not public yet
    };
    
    export class Motion extends Component<any, any> { }
    
    export class TransitionMotion extends Component<any, any> { }
    
    export class StaggeredMotion extends Component<any, any> { }

    

    export function spring(val: number, config?: Config): any;

    export class Presets {
        [name: string]: Config
    }

    export const presets: Presets;
}
