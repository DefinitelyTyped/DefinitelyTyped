// Type definitions for react-fontawesome 1.5.0
// Project: https://github.com/danawoodman/react-fontawesome
// Definitions by: Timur Rustamov <https://github.com/timurrustamov>, Anton Kandybo <https://github.com/dublicator>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-fontawesome" {

  import * as React from 'react';

  type FontAwesomeSize = 'lg' | '2x' | '3x' | '4x' | '5x';
  type FontAwesomeStack = "1x" | "2x";
  type FontAwesomeFlip = "horizontal" | "vertical";

  interface FontAwesomeProps {
    ariaLabel?: string,
    border?: boolean,
    className?: string,
    cssModule?: any,
    fixedWidth?: boolean,
    flip?: FontAwesomeFlip,
    inverse?: boolean,
    name: string,
    pulse?: boolean,
    rotate?: number,
    size?: FontAwesomeSize,
    spin?: boolean,
    stack?: FontAwesomeStack,
    tag?: string
  }

  class FontAwesome extends React.Component<FontAwesomeProps> {}

  export = FontAwesome;
}
