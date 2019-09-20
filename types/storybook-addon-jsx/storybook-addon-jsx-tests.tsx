/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';

const { Component } = React;

storiesOf('Component', module)
  .addWithJSX('simple info', () =>
  <Component>Click the "?" mark at top-right to view the info.</Component>);

storiesOf('Component with options', module)
  .addWithJSX('simple info', () =>
  <Component>Click the "?" mark at top-right to view the info.</Component>,
  {
    skip: 2,
    enableBeautify: false,
    onBeforeRender: (str) => ''
  });

storiesOf('Component with partial options', module)
  .addWithJSX('simple info', () =>
  <Component>Click the "?" mark at top-right to view the info.</Component>,
  {
    skip: 2
  });
