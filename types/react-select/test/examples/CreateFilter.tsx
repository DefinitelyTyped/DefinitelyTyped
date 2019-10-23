import * as React from 'react';
import Select, { createFilter } from 'react-select';
import { colourOptions } from '../data';
import { Note } from '../styled-components';

const Checkbox = (props: any) => <input type="checkbox" {...props} />;

interface State {
  ignoreCase: boolean;
  ignoreAccents: boolean;
  trim: boolean;
  matchFromStart: boolean;
}

export default class SelectCreateFilter extends React.Component<any, State> {
  state: State = {
    ignoreCase: false,
    ignoreAccents: false,
    trim: false,
    matchFromStart: false,
  };
  toggleOption = (key: string) => () => {
    this.setState((state: any) => ({ ...state, [key]: !state[key] }));
  }
  render() {
    const {
      ignoreCase,
      ignoreAccents,
      trim,
      matchFromStart,
    } = this.state;

    const filterConfig = {
      ignoreCase,
      ignoreAccents,
      trim,
      matchFrom: this.state.matchFromStart ? ('start' as 'start') : ('any' as 'any'),
    };

    return (
      <React.Fragment>
        <Select
          defaultValue={colourOptions[0]}
          isClearable
          isSearchable
          name="color"
          options={colourOptions}
          filterOption={createFilter(filterConfig)}
        />
        <Note Tag="label">
          <Checkbox
            checked={ignoreCase}
            onChange={this.toggleOption('ignoreCase')}
            id="cypress-single__clearable-checkbox"
          />
          Ignore Case
        </Note>
        <Note Tag="label">
          <Checkbox
            checked={ignoreAccents}
            onChange={this.toggleOption('ignoreAccents')}
            id="cypress-single__clearable-checkbox"
          />
          Ignore Accents
        </Note>
        <Note Tag="label">
          <Checkbox
            checked={trim}
            onChange={this.toggleOption('trim')}
            id="cypress-single__clearable-checkbox"
          />
          Trim
        </Note>
        <Note Tag="label">
          <Checkbox
            checked={matchFromStart}
            onChange={this.toggleOption('matchFromStart')}
            id="cypress-single__clearable-checkbox"
          />
          Match from the start
        </Note>
      </React.Fragment>
    );
  }
}
