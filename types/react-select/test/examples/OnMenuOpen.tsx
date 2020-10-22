import * as React from 'react';

import Select from 'react-select';
import { ColourOption, colourOptions } from '../data';
import { Note } from '../styled-components';

const Checkbox = (props: any) => <input type="checkbox" {...props} />;

interface State {
  defaultMenuScroll?: number;
}

export default class SelectScrolledMenu extends React.Component<{}, State> {
  wrappedSelect: React.RefObject<Select<ColourOption>>;

  handleChangeMenuScrollDefault = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({defaultMenuScroll: parseInt(event.target.value, 10)});
  }

  handleMenuOpen = (): void => {
    const {defaultMenuScroll} = this.state;
    if (!defaultMenuScroll || !this.wrappedSelect.current) {
      return;
    }
    const select = this.wrappedSelect.current.select;
    setTimeout((): void => {
      select.setState(
        {focusedOption: colourOptions[defaultMenuScroll - 1]},
        (): void => {
          select.focusOption('pagedown');
        },
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Select<ColourOption>
          className="basic-single"
          classNamePrefix="select"
          defaultValue={colourOptions[0]}
          name="color"
          options={colourOptions}
          ref={this.wrappedSelect}
        />
        <Note Tag="label">
          Default focused option index:
          <input
            value={this.state.defaultMenuScroll}
            onChange={this.handleChangeMenuScrollDefault}
            type="numeric"
          />
          Clearable
        </Note>
      </React.Fragment>
    );
  }
}
