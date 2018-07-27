import React, { Component, type ElementRef, Fragment } from 'react';

import Select from '../../src';
import AsyncSelect from '../../src/Async';
import CreatableSelect from '../../src/Creatable';
import { Note } from '../styled-components';
import { colourOptions } from '../data';

const filterColors = (inputValue: string) =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class AccessingInterals extends Component {
  selectRef: ElementRef<*>;
  asyncRef: ElementRef<*>;
  creatableRef: ElementRef<*>;
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
  onSelectRef =  (ref) => {
    console.log(ref);
    this.selectRef = ref;
  }
  render () {
    return (
      <Fragment>
        <h4>
          Creatable Select
        </h4>
        <CreatableSelect
          ref={ ref => { this.creatableRef = ref; }}
          isClearable
          onChange={this.handleChange}
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
          ref={ ref => { this.asyncRef = ref; }}
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
          ref={ref => { this.selectRef = ref; }}
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
      </Fragment>
    );
  }
}
