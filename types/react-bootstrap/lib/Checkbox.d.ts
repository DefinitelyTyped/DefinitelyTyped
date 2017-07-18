import * as React from 'react';

interface CheckboxProps extends React.HTMLProps<Checkbox> {
  bsClass?: string;
  disabled?: boolean;
  inline?: boolean;
  inputRef?: (instance: HTMLInputElement) => void;
  validationState?: "success" | "warning" | "error";
}

export default class Checkbox extends React.Component<CheckboxProps> { }
