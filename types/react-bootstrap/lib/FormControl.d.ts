import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import FormControlFeedback from './FormControlFeedback';
import FormControlStatic from './FormControlStatic';

interface FormControlProps extends React.HTMLProps<FormControl> {
  bsClass?: string;
  bsSize?: Sizes;
  componentClass?: React.ReactType;
  id?: string;
  inputRef?: (instance: HTMLInputElement) => void;
  type?: string;
}

export default class FormControl extends React.Component<FormControlProps> {
  public static Feedback: typeof FormControlFeedback;
  public static Static: typeof FormControlStatic;
}
