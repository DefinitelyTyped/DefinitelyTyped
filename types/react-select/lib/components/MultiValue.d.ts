import { ComponentType, Component, ReactNode as Node } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps } from '../types';

export type MultiValueProps<OptionType> = CommonProps<OptionType> &{
  children: Node,
  components: any,
  cropWithEllipsis: boolean,
  data: OptionType,
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
export function multiValueLabelCSS(props: MultiValueProps<any>): any; // TODO css type
export function multiValueRemoveCSS(props: MultiValueProps<any>): any; // TODO css type

export interface MultiValueGenericProps<OptionType> {
  children: Node;
  data: OptionType;
  innerProps: { className?: string };
  selectProps: any;
}
export const MultiValueGeneric: ComponentType<MultiValueGenericProps<any>>;

export const MultiValueContainer: typeof MultiValueGeneric;
export const MultiValueLabel: typeof MultiValueGeneric;
export type MultiValueRemoveProps<OptionType> = CommonProps<OptionType> & {
  children: Node,
  innerProps: {
    className: string,
    onTouchEnd: (event: any) => void,
    onClick: (event: any) => void,
    onMouseDown: (event: any) => void,
  },
  selectProps: any,
};
export class MultiValueRemove<OptionType> extends Component<MultiValueRemoveProps<OptionType>> {
  static defaultProps: {
    children: Node,
  };
}

export class MultiValue<OptionType> extends Component<MultiValueProps<OptionType>> {
  static defaultProps: {
    cropWithEllipsis: boolean,
  };
}

export default MultiValue;
