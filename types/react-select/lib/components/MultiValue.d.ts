import { ComponentType, Component, ReactNode as Node } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps } from '../types';

export type MultiValueProps = CommonProps &{
  children: Node,
  components: any,
  cropWithEllipsis: boolean,
  data: any,
  innerProps: any,
  isFocused: boolean,
  isDisabled: boolean,
  removeProps: {
    onTouchEnd: (event: any) => void,
    onClick: (event: any) => void,
    onMouseDown: (event: any) => void,
  },
};

export function multiValueCSS(): any; // TODO css type
export function multiValueLabelCSS(props: MultiValueProps): any; // TODO css type
export function multiValueRemoveCSS(props: MultiValueProps): any; // TODO css type

export type MultiValueGenericProps = {
  children: Node,
  data: any,
  innerProps: { className?: string },
  selectProps: any,
};
export const MultiValueGeneric: ComponentType<MultiValueGenericProps>;

export const MultiValueContainer: typeof MultiValueGeneric;
export const MultiValueLabel: typeof MultiValueGeneric;
export type MultiValueRemoveProps = CommonProps & {
  children: Node,
  innerProps: {
    className: string,
    onTouchEnd: (event: any) => void,
    onClick: (event: any) => void,
    onMouseDown: (event: any) => void,
  },
  selectProps: any,
};
export class MultiValueRemove extends Component<MultiValueRemoveProps> {
  static defaultProps: {
    children: Node,
  };
}

export class MultiValue extends Component<MultiValueProps> {
  static defaultProps: {
    cropWithEllipsis: boolean,
  };
}

export default MultiValue;
