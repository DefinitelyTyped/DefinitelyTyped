/// <reference types="storybook__react" />

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';

const { Component } = React;

setDefaults({
    inline: false,
    propTables: false
});

storiesOf('Component', module)
  .add('no info',
       withInfo()(() =>
         <Component>Click the "?" mark at top-right to view the info.</Component>
       )
  )
  .add('simple info',
       withInfo('doc string about my component')(() =>
         <Component>Click the "?" mark at top-right to view the info.</Component>
       )
  )
  .add('using an options object',
       withInfo({
         text: 'String or React Element with docs about my component',
         inline: true,
         header: true,
         source: true,
         styles: {},
         marksyConf: {},
         maxPropObjectKeys: 1,
         maxPropArrayLength: 2,
         maxPropsIntoLine: 3,
         maxPropStringLength: 4,
       })(() =>
         <Component>Click the "?" mark at top-right to view the info.</Component>
       )
  );
