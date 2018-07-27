// @flow

import React, { Component, type ComponentType, type ElementRef } from 'react';

import type { ActionMeta, InputActionMeta, ValueType } from './types';

export type Props = {
  defaultInputValue: string,
  defaultMenuIsOpen: boolean,
  defaultValue: ValueType,
  inputValue?: string,
  menuIsOpen?: boolean,
  value?: ValueType,
};
type State = {
  inputValue: string,
  menuIsOpen: boolean,
  value: ValueType,
};

const manageState = (SelectComponent: ComponentType<*>) =>
  class StateManager extends Component<Props, State> {
    static defaultProps = {
      defaultInputValue: '',
      defaultMenuIsOpen: false,
      defaultValue: null,
    };

    select: ElementRef<*>;

    state = {
      inputValue:
        this.props.inputValue !== undefined
          ? this.props.inputValue
          : this.props.defaultInputValue,
      menuIsOpen:
        this.props.menuIsOpen !== undefined
          ? this.props.menuIsOpen
          : this.props.defaultMenuIsOpen,
      value:
        this.props.value !== undefined
          ? this.props.value
          : this.props.defaultValue,
    };
    focus() {
      this.select.focus();
    }
    blur() {
      this.select.blur();
    }
    getProp(key: string) {
      return this.props[key] !== undefined ? this.props[key] : this.state[key];
    }
    callProp(name: string, ...args: any) {
      if (typeof this.props[name] === 'function') {
        return this.props[name](...args);
      }
    }
    onChange = (value: any, actionMeta: ActionMeta) => {
      this.callProp('onChange', value, actionMeta);
      this.setState({ value });
    };
    onInputChange = (value: any, actionMeta: InputActionMeta) => {
      // TODO: for backwards compatibility, we allow the prop to return a new
      // value, but now inputValue is a controllable prop we probably shouldn't
      const newValue = this.callProp('onInputChange', value, actionMeta);
      this.setState({
        inputValue: newValue !== undefined ? newValue : value,
      });
    };
    onMenuOpen = () => {
      this.callProp('onMenuOpen');
      this.setState({ menuIsOpen: true });
    };
    onMenuClose = () => {
      this.callProp('onMenuClose');
      this.setState({ menuIsOpen: false });
    };
    render() {
      return (
        <SelectComponent
          {...this.props}
          ref={ref => {
            this.select = ref;
          }}
          inputValue={this.getProp('inputValue')}
          menuIsOpen={this.getProp('menuIsOpen')}
          onChange={this.onChange}
          onInputChange={this.onInputChange}
          onMenuClose={this.onMenuClose}
          onMenuOpen={this.onMenuOpen}
          value={this.getProp('value')}
        />
      );
    }
  };

export default manageState;
