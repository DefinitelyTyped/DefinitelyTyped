// Type definitions for react-vega 6.0
// Project: https://github.com/vega/react-vega#readme
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, CSSProperties } from 'react';
import { TooltipHandler, Spec, View } from 'vega-typings';

export interface VegaPropsWithoutSpec {
  background?: string;
  className?: string;
  data?: Record<string, any[]>;
  enableHover?: boolean;
  height?: number;
  logLevel?: number;
  onNewView?: (view: View) => void;
  onParseError?: (error: Error) => void;
  padding?:
    | number
    | { left?: number; right?: number; top?: number; bottom?: number };
  renderer?: string;
  style?: CSSProperties;
  tooltip?: TooltipHandler;
  width?: number;
}

export interface VegaPropsWithSpec extends VegaPropsWithoutSpec {
  spec: Spec;
}

export class VegaWithSpec extends Component<VegaPropsWithoutSpec> {
         static getSpec(): Spec;
       }

export interface CreateClassFromSpec {
  (spec: Spec): typeof VegaWithSpec;
  (name: string, spec: Spec): typeof VegaWithSpec;
}

export default class Vega extends Component<VegaPropsWithSpec> {
                 static createClassFromSpec: CreateClassFromSpec;
               }
