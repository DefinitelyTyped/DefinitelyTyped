// Type definitions for react-carousel-dots 0.1.0
// Project: https://github.com/fulopdaniel/react-carousel-dots
// Definitions by: Mac Rusek https://github.com/macrusso
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-carousel-dots' {
  import React from 'react';

  export interface IDotsProps {
    length: number;
    active: number;
    size?: number;
    margin?: number;
    visible?: number;
    className?: string;
  }

  class Dots extends React.Component<IDotsProps> {
    constructor(props: IDotsProps);
  }

  export default Dots;
}
