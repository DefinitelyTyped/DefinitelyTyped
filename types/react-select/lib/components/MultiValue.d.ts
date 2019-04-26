import { ComponentType, Component, ReactNode } from 'react';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps } from '../types';
import { Props as SelectProps, DefaultSelectComponentsProps } from '../Select';

export type MultiValueProps<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> = CommonProps<OptionType, SelectComponentsProps> &{
  children: ReactNode,
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

export function multiValueCSS(): React.CSSProperties;
export function multiValueLabelCSS(props: MultiValueProps<any, any>): React.CSSProperties;
export function multiValueRemoveCSS(props: MultiValueProps<any, any>): React.CSSProperties;

export interface MultiValueGenericProps<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> {
  children: ReactNode;
  data: OptionType;
  innerProps: { className?: string };
  selectProps: SelectProps<OptionType, SelectComponentsProps>;
}
export const MultiValueGeneric: ComponentType<MultiValueGenericProps<any>>;

export const MultiValueContainer: typeof MultiValueGeneric;
export const MultiValueLabel: typeof MultiValueGeneric;
export type MultiValueRemoveProps<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> = CommonProps<OptionType, SelectComponentsProps> & {
  children: ReactNode,
  innerProps: {
    className: string,
    onTouchEnd: (event: any) => void,
    onClick: (event: any) => void,
    onMouseDown: (event: any) => void,
  },
};

export class MultiValueRemove<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> extends Component<MultiValueRemoveProps<OptionType, SelectComponentsProps>> {
  static defaultProps: {
    children: ReactNode,
  };
}

export class MultiValue<OptionType, SelectComponentsProps = DefaultSelectComponentsProps> extends Component<MultiValueProps<OptionType, SelectComponentsProps>> {
  static defaultProps: {
    cropWithEllipsis: boolean,
  };
}

export default MultiValue;
