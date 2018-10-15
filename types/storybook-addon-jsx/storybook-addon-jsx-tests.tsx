/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';

const { Component } = React;

storiesOf('Component', module)
  .addWithJSX('simple info', () =>
  <Component>Click the "?" mark at top-right to view the info.</Component>);
