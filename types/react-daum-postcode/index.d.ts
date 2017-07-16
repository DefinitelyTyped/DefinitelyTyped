// Type definitions for react-daum-postcode 1.2.1
// Project: https://github.com/kimminsik-bernard/react-daum-postcode
// Definitions by: Sa-ryong Kang <https://github.com/Sa-ryong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from 'react';

export interface DaumPostcodeProps {
  onComplete?: any;
  width?: any;
  height?: any;
  autoClose?: any;
  autoResize?: any;
  animation?: any;
  style?: any;
  defaultQuery?: any;
  theme?: any;
}

export default class DaumPostcode extends Component<DaumPostcodeProps, any> {
  render(): JSX.Element;
}