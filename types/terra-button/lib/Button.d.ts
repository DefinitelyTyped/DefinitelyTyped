import * as React from 'react';
import ThemeContext from 'terra-theme-context';

export {};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export enum ButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ButtonVariants {
  NEUTRAL = 'neutral',
  EMPHASIS = 'emphasis',
  GHOST = 'ghost',
  /** @deprecated */
  'DE-EMPHSASIS' = 'de-emphasis',
  'DE-EMPHASIS' = 'de-emphasis',
  ACTION = 'action',
  UTILITY = 'utility',
}

type OmittedKeys =
  | 'type'
  | 'disabled'
  | 'tabIndex'
  | 'aria-disabled'
  | 'aria-label';

export interface ButtonProps<T extends HTMLButtonElement | HTMLAnchorElement> extends Omit<React.HTMLAttributes<T>, OmittedKeys> {
  /**
   * Sets the href. When set will render the component as an anchor tag.
   */
  href?: string;
  /**
   * An optional icon. Nested inline with the text when provided.
   */
  icon?: React.ReactElement;
  /**
   * Whether or not the button should only display as an icon.
   */
  isIconOnly?: boolean;
  /**
   * Whether or not the button should display as a block.
   */
  isBlock?: boolean;
  /**
   * Whether or not the button has reduced padding
   */
  isCompact?: boolean;
  /**
   * Whether or not the button should be disabled.
   */
  isDisabled?: boolean;
  /**
   * Reverses the position of the icon and text.
   */
  isReversed?: boolean;
  /**
   * Callback function triggered when mouse is pressed.
   */
  onMouseDown?: React.MouseEventHandler<T>;
  /**
   * Callback function triggered when clicked.
   */
  onClick?: React.MouseEventHandler<T>;
  /**
   * Callback function triggered when button loses focus.
   */
  onBlur?: React.FocusEventHandler<T>;
  /**
   * Callback function triggered when button gains focus.
   */
  onFocus?: React.FocusEventHandler<T>;
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown?: React.KeyboardEventHandler<T>;
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp?: React.KeyboardEventHandler<T>;
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback?: React.Ref<T>;
  /**
   * Sets the button text.
   * If the button is `isIconOnly` or variant `utility` this text is set as the aria-label and title for accessibility.
   */
  text: string;
  /**
   * Additional information to display as a native tooltip on hover.
   * Buttons declared as `isIconOnly` or `utility` will fallback to using `text` if not provided.
   */
  title?: string;
  /**
   * Sets the button type. One of `button`; `submit`; or `reset`.
   */
  type?: ButtonTypes;
  /**
   * Sets the button variant. One of `neutral`;  `emphasis`; `ghost`; `de-emphasis`; `action` or `utility`.
   */
  variant?: ButtonVariants;
}

export default class Button<T extends HTMLAnchorElement | HTMLButtonElement> extends React.Component<ButtonProps<T>> {
  static contextType: typeof ThemeContext;

  static Opts: {
    Types: typeof ButtonTypes;
    Variants: typeof ButtonVariants;
  };
}
