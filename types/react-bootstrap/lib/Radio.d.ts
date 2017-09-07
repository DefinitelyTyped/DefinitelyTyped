import * as React from 'react';

declare class Radio extends React.Component<RadioProps> { }
declare namespace Radio { }
export = Radio

interface RadioProps extends React.HTMLProps<Radio> {
  bsClass?: string;
  disabled?: boolean;
  inline?: boolean;
  inputRef?: (instance: HTMLInputElement) => void;
  validationState?: "success" | "warning" | "error";
}
