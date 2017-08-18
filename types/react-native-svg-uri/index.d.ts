// Type definitions for react-native-svg-uri 1.2
// Project: https://github.com/matiascba/react-native-svg-uri#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ImageURISource } from 'react-native';

export interface SvgUriProps {
  /**
   * The width of the rendered svg
   */
  width?: number | string;

  /**
   * The height of the rendered svg
   */
  height?: number | string;

  /**
   * Source path for the .svg file
   * Expects a require('path') to the file or object with uri.
   * e.g. source={require('my-path')}
   * e.g. source={{ur: 'my-path'}}
   */
  source?: ImageURISource;

  /**
   * Direct svg code to render. Similar to inline svg
   */
  svgXmlData?: string;

  /**
   * Fill color for the svg object
   */
  fill?: string;
}

export default class SvgUri extends React.Component<SvgUriProps> { }
