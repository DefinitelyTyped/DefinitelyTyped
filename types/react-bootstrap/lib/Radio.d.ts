import * as React from 'react';

interface RadioProps extends React.HTMLProps<Radio> {
  bsClass?: string;
  disabled?: boolean;
  inline?: boolean;
  inputRef?: (instance: HTMLInputElement) => void;
  validationState?: "success" | "warning" | "error";
}

export default class Radio extends React.Component<RadioProps> { }
