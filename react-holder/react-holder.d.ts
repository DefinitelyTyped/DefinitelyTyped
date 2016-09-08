// Type definitions for react-holder 1.0.0
// Project: https://github.com/Moeriki/react-holder
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>

declare module "react-holder" {

  import React = __React;

  interface ReactHolderProp extends React.HTMLAttributes {
    width: string | number;
    height: string | number;
    updateOnResize: boolean;

    // config args
    theme?: string;
    random?: boolean;
    bg?: string
    fg?: string;
    text?: string;
    size?: number;
    font?: string;
    align?: string;
    outline?: boolean;
    lineWrap?: number;
  }

  class ReactHolder extends React.Component<ReactHolderProp, any> {

  }
  export default ReactHolder;
}
