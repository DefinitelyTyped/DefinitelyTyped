import * as React from 'react';

import Select from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import CreatableSelect from 'react-select/lib/Creatable';
import { Note } from '../styled-components';
import { ColourOption, colourOptions } from '../data';

const filterColors = (inputValue: string) =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = (inputValue: string) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class AccessingInterals extends React.Component {
  selectRef: Select<ColourOption>;
  asyncRef: AsyncSelect<ColourOption>;
  creatableRef: CreatableSelect<ColourOption>;
  focus = () => {
    console.log(this.selectRef);
    this.selectRef.focus();
  }
  focusCreatable = () => {
    console.log(this.creatableRef);
    this.creatableRef.focus();
  }
  focusAsync = () => {
    console.log(this.asyncRef);
    this.asyncRef.focus();
  }
  blurAsync = () => {
    this.asyncRef.blur();
  }
  blurCreatable = () => {
    this.creatableRef.blur();
  }
  blur = () => this.selectRef.blur();
  onSelectRef = (ref: any) => {
    console.log(ref);
    this.selectRef = ref;
  }
  render() {
    return (
      <React.Fragment>
        <h4>
          Creatable Select
        </h4>
        <CreatableSelect
          ref={ (ref: any) => { this.creatableRef = ref; }}
          isClearable
          options={colourOptions}
        />
        <Note Tag="label">
          <button
            onClick={this.focusCreatable}
            id="cypress-single__clearable-checkbox"
          >Focus</button>
        </Note>
        <Note Tag="label">
          <button
            onClick={this.blurCreatable}
            id="cypress-single__clearable-checkbox"
          >Blur</button>
        </Note>
        <h4>
          Async Select
        </h4>
        <AsyncSelect
          ref={ (ref: any) => { this.asyncRef = ref; }}
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
        />
        <Note Tag="label">
          <button
            onClick={this.focusAsync}
            id="cypress-single__clearable-checkbox"
          >Focus</button>
        </Note>
        <Note Tag="label">
          <button
            onClick={this.blurAsync}
            id="cypress-single__clearable-checkbox"
          >Blur</button>
        </Note>
        <h4>Select</h4>
        <Select
          ref={(ref: any) => { this.selectRef = ref; }}
          defaultValue={colourOptions[2]}
          name="colors"
          options={colourOptions}
        />
        <Note Tag="label">
          <button
            onClick={this.focus}
            id="cypress-single__clearable-checkbox"
          >Focus</button>
        </Note>
        <Note Tag="label">
          <button
            onClick={this.blur}
            id="cypress-single__clearable-checkbox"
          >Blur</button>
        </Note>
      </React.Fragment>
    );
  }
}
