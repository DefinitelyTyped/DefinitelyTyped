// Type definitions for react-fontawesome v.1.1.0
// Project: https://github.com/danawoodman/react-fontawesome
// Definitions by: Timur Rustamov <https://github.com/timurrustamov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

declare module "react-fontawesome" {

  //Import react
  import React = require('react');

  type FontAwesomeSize = 'lg' | '2x' | '3x' | '4x' | '5x';

  interface FontAwesomeProps {

    border?: boolean,
    className?: string,
    fixedWidth?: boolean,
    flip?: boolean,
    inverse?: boolean
    name: string,
    pulse?: boolean,
    rotate?: number,
    size?: FontAwesomeSize,
    spin?: boolean,
    stack?: string,
    style?: React.CSSProperties
  }

  class FontAwesome extends React.Component<FontAwesomeProps, {}> {}

  export = FontAwesome;
}
