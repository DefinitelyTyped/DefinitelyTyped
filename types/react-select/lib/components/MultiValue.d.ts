// @flow
import React, { Component, type Node } from 'react';
import { css } from 'emotion';

import { borderRadius, colors, spacing } from '../theme';
import { CrossIcon } from './indicators';
import type { CommonProps } from '../types';

export type MultiValueProps = CommonProps &{
  children: Node,
  components: any,
  cropWithEllipsis: boolean,
  data: any,
  innerProps: any,
  isFocused: boolean,
  isDisabled: boolean,
  removeProps: {
    onTouchEnd: any => void,
    onClick: any => void,
    onMouseDown: any => void,
  },
};

export const multiValueCSS = () => ({
  backgroundColor: colors.neutral10,
  borderRadius: borderRadius / 2,
  display: 'flex',
  margin: spacing.baseUnit / 2,
  minWidth: 0, // resolves flex/text-overflow bug
});
export const multiValueLabelCSS = ({ cropWithEllipsis }: MultiValueProps) => ({
  borderRadius: borderRadius / 2,
  color: colors.text,
  fontSize: '85%',
  overflow: 'hidden',
  padding: 3,
  paddingLeft: 6,
  textOverflow: cropWithEllipsis ? 'ellipsis' : null,
  whiteSpace: 'nowrap',
});
export const multiValueRemoveCSS = ({ isFocused }: MultiValueProps) => ({
  alignItems: 'center',
  borderRadius: borderRadius / 2,
  backgroundColor: isFocused && colors.dangerLight,
  display: 'flex',
  paddingLeft: spacing.baseUnit,
  paddingRight: spacing.baseUnit,
  ':hover': {
    backgroundColor: colors.dangerLight,
    color: colors.danger,
  },
});

export type MultiValueGenericProps = {
  children: Node,
  data: any,
  innerProps: { className?: String },
  selectProps: any,
};
export const MultiValueGeneric = ({
  children,
  innerProps,
}: MultiValueGenericProps) => <div {...innerProps}>{children}</div>;

export const MultiValueContainer = MultiValueGeneric;
export const MultiValueLabel = MultiValueGeneric;
export type MultiValueRemoveProps = CommonProps & {
  children: Node,
  innerProps: {
    className: String,
    onTouchEnd: any => void,
    onClick: any => void,
    onMouseDown: any => void,
  },
  selectProps: any,
};
export class MultiValueRemove extends Component<MultiValueRemoveProps> {
  static defaultProps = {
    children: <CrossIcon size={14} />,
  };
  render() {
    const { children, innerProps } = this.props;
    return <div {...innerProps}>{children}</div>;
  }
}

class MultiValue extends Component<MultiValueProps> {
  static defaultProps = {
    cropWithEllipsis: true,
  };
  render() {
    const {
      children,
      className,
      components,
      cx,
      data,
      getStyles,
      innerProps,
      isDisabled,
      removeProps,
      selectProps,
    } = this.props;

    const { Container, Label, Remove } = components;

    const containerInnerProps = {
      className: cx(
        css(getStyles('multiValue', this.props)),
        {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled,
        },
        className
      ),
      ...innerProps,
    };

    const labelInnerProps = {
      className: cx(
        css(getStyles('multiValueLabel', this.props)),
        {
          'multi-value__label': true,
        },
        className
      ),
    };

    const removeInnerProps = {
      className: cx(
        css(getStyles('multiValueRemove', this.props)),
        {
          'multi-value__remove': true,
        },
        className
      ),
      ...removeProps,
    };

    return (
      <Container
        data={data}
        innerProps={containerInnerProps}
        selectProps={selectProps}
      >
        <Label
          data={data}
          innerProps={labelInnerProps}
          selectProps={selectProps}
        >
          {children}
        </Label>
        <Remove
          data={data}
          innerProps={removeInnerProps}
          selectProps={selectProps}
        />
      </Container>
    );
  }
}

export default MultiValue;
