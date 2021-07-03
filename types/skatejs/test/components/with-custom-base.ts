import { define } from 'skatejs';

import { ButtonComponent, InputComponent } from './custom-base';

export type ButtonProps = {
  raised?: boolean;
};

export class MaterialButton extends ButtonComponent<ButtonProps> {
  static readonly props = {
    raised: ''
  };

  type?: string;
  foo() {
    this.props.raised;

    console.log(
      // we have to explicitly define HTMLBUttonProps as TS doesn't support Generic mixins ye https://github.com/Microsoft/TypeScript/pull/13743#issuecomment-277716812t
      this.type
    );
  }
  // now our MaterialButton has all <button> default behaviours and props
}
define(MaterialButton);

export type InputProps = {
  touched?: boolean;
};
export class MaterialInput extends InputComponent<InputProps> {
  // now our MaterialInput has all <input> default behaviours and props

  type?: string;
  foo() {
    this.props.touched;

    console.log(this.type);
  }
}

define(MaterialInput);
