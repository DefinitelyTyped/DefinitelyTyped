import * as React from 'react';

import Select from 'react-select';
import { colourOptions } from '../data';
import { Note } from '../styled-components';

const Checkbox = (props: any) => <input type="checkbox" {...props} />;

interface State {
  menuIsOpen: boolean;
}

export default class controlledMenu extends React.Component<any, State> {
  state = {
    menuIsOpen: false,
  };
  toggleMenuIsOpen = () =>
    this.setState(state => ({ menuIsOpen: !state.menuIsOpen }))
  render() {
    const { menuIsOpen } = this.state;
    return (
      <React.Fragment>
        <Select
          defaultValue={colourOptions[0]}
          isClearable
          menuIsOpen={menuIsOpen}
          styles={{ menu: (base: any) => ({ ...base, position: 'relative' }) }}
          name="color"
          options={colourOptions}
        />
        <Note Tag="label">
          <Checkbox
            checked={menuIsOpen}
            onChange={this.toggleMenuIsOpen}
            id="cypress-single__clearable-checkbox"
          />
          menuIsOpen
        </Note>
      </React.Fragment>
    );
  }
}
