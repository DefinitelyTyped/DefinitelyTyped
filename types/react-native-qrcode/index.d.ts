// Type definitions for react-native-qrcode 0.2
// Project: https://github.com/cssivision/react-native-qrcode
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export default class QRCode extends React.Component<QRCodeProperties> { }

export interface QRCodeProperties {
  value?: string;
  size?: number;
  bgColor?: string;
  fgColor?: string;
}
