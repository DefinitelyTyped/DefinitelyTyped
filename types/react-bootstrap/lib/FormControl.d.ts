import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import * as FormControlFeedback from './FormControlFeedback';
import * as FormControlStatic from './FormControlStatic';

declare class FormControl extends React.Component<FormControlProps> {
  public static Feedback: typeof FormControlFeedback;
  public static Static: typeof FormControlStatic;
}
declare namespace FormControl { }
export = FormControl

interface FormControlProps extends React.HTMLProps<FormControl> {
  bsClass?: string;
  bsSize?: Sizes;
  componentClass?: React.ReactType;
  id?: string;
  inputRef?: (instance: HTMLInputElement) => void;
  type?: string;
}
