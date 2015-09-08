// Type definitions for material-ui
// Project: http://material-ui.com/
// Definitions by: nojaf
// Definitions: https://github.com/borisyankov/DefinitelyTyped/material-ui/

///<reference path='../react/react.d.ts' />
declare module MaterialUI {
  import React = __React;

   module Styles {
    export class ThemeManager{
      getCurrentTheme():any;
    }
  }

  //FlatButton
  interface FlatButtonProp extends React.HTMLAttributes {
    label?:string;
  }

  interface FlatButton extends React.ReactElement<FlatButtonProp> {

  }

  interface FlatButtonClass extends React.ComponentClass<FlatButtonProp> {}

  var FlatButton:FlatButtonClass;
}

declare module "material-ui" {
  export = MaterialUI;
}

declare module __React{
  //for FlatButton
  function createElement(
  type: MaterialUI.FlatButtonClass,
  props: MaterialUI.FlatButtonProp,
  ...children: __React.ReactNode[]): MaterialUI.FlatButton;
}
