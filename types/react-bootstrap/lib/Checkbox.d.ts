import * as React from 'react';

declare class Checkbox extends React.Component<CheckboxProps> { }
declare namespace Checkbox { }
export = Checkbox

interface CheckboxProps extends React.HTMLProps<Checkbox> {
  bsClass?: string;
  disabled?: boolean;
  inline?: boolean;
  inputRef?: (instance: HTMLInputElement) => void;
  validationState?: "success" | "warning" | "error";
}
