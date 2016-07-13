// Type definitions for redux-form-material-ui v3.0.0
// Project: https://github.com/erikras/redux-form-material-ui
// Definitions by: Andrey Bolshov <https://github.com/asnow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />
///<reference path='../material-ui/material-ui.d.ts' />


declare module "redux-form-material-ui" {
  export import Checkbox = __ReduxFormMaterialUI.Checkbox;
  export import DatePicker = __ReduxFormMaterialUI.DatePicker;
  export import RadioButtonGroup = __ReduxFormMaterialUI.RadioButtonGroup;
  export import SelectField = __ReduxFormMaterialUI.SelectField;
  export import Slider = __ReduxFormMaterialUI.Slider;
  export import TextField = __ReduxFormMaterialUI.TextField;
  export import Toggle = __ReduxFormMaterialUI.Toggle;
}

declare namespace __ReduxFormMaterialUI {
  export import React = __React;
  export import MaterialUI = __MaterialUI;
  
  export class Checkbox extends React.Component<any, {}>{};
  export class DatePicker extends React.Component<any, {}>{};
  export class RadioButtonGroup extends React.Component<any, {}>{};
  export class SelectField extends React.Component<any, {}>{};
  export class Slider extends React.Component<any, {}>{};
  export class TextField extends React.Component<any, {}>{};
  export class Toggle extends React.Component<any, {}>{};
}


