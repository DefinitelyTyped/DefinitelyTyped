/// <reference types="storybook__react" />

import * as React from 'react';
import { addDecorator, storiesOf } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';

const { Component } = React;

const TableComponent = ({ propDefinitions }: { propDefinitions: Array<{
    property: string;
    propType: { [key: string]: any} | string;
    required: boolean;
    description: string;
    defaultValue: any;
}> }) => (
    <table>
        <thead>
        <tr>
            <th>property</th>
            <th>propType</th>
            <th>required</th>
            <th>default</th>
            <th>description</th>
        </tr>
        </thead>
        <tbody>
        {propDefinitions.map(row => (
            <tr key={row.property}>
            <td>{row.property}</td>
            <td>{row.required ? 'yes' : '-'}</td>
            <td>
                {row.defaultValue === undefined ? '-' : row.defaultValue}
            </td>
            <td>{row.description}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

addDecorator(withInfo);

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
         components: {},
         marksyConf: {},
         maxPropObjectKeys: 1,
         maxPropArrayLength: 2,
         maxPropsIntoLine: 3,
         maxPropStringLength: 4,
         TableComponent,
         excludedPropTypes: [],
       })(() =>
         <Component>Click the "?" mark at top-right to view the info.</Component>
       )
  );
