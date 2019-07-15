import * as React from 'react';

import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};

interface Option {
  label: string;
  value: string;
}

const createOption = (label: string): Option => ({
  label,
  value: label,
});

interface State {
  inputValue: string;
  value: Option[];
}

export default class CreatableInputOnly extends React.Component<any, State> {
  state: State = {
    inputValue: '',
    value: [],
  };
  handleChange = (value: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(value);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
  }
  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  }
  handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        console.group('Value Added');
        console.log(value);
        console.groupEnd();
        this.setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  }
  render() {
    const { inputValue, value } = this.state;
    return (
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        placeholder="Type something and press enter..."
        value={value}
      />
    );
  }
}
