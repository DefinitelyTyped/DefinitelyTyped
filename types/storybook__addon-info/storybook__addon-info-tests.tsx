import React, { Component, FunctionComponent, HTMLAttributes } from 'react';
import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { setDefaults, withInfo, TableComponentOptionProps } from '@storybook/addon-info';

const TableComponent: FunctionComponent<TableComponentOptionProps> = ({ propDefinitions }) => (
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
                    <td>{row.defaultValue === undefined ? '-' : row.defaultValue}</td>
                    <td>{row.description}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const BaseButton: FunctionComponent<HTMLAttributes<HTMLButtonElement> & { label: string }> = ({ label }) => (
    <button type="button">{label}</button>
);

const CustomButton: FunctionComponent<HTMLAttributes<HTMLButtonElement> & { label: string }> = ({ label, style }) => (
    <button type="button" style={style}>
        {label}
    </button>
);

// `withInfo` used as global decorator
addDecorator(withInfo);

// define parameters of info addon as part of global parameters
addParameters({
    info: {
        text: 'String or React Element with docs about my component',
        inline: true,
        header: true,
        source: true,
        propTables: [CustomButton],
        propTablesExclude: [BaseButton],
        styles: {},
        components: {},
        marksyConf: {},
        maxPropObjectKeys: 1,
        maxPropArrayLength: 2,
        maxPropsIntoLine: 3,
        maxPropStringLength: 4,
        TableComponent,
        excludedPropTypes: [],
    },
});

// `withInfo` used as story decorator
storiesOf('Component', module).addDecorator(withInfo);

// Set parameters for multiple config
storiesOf('Component', module)
    .addParameters({
        info: {
            header: '',
            // Your settings
        },
    })
    .add('with some emoji', () => <Component />);

storiesOf('Component', module)
    .add(
        'with some emoji',
        () => <Component emoji />,
        { info: { inline: true, header: false } }, // Make your component render inline with the additional info
    )
    .add(
        'with no emoji',
        () => <Component />,
        { info: '☹️ no emojis' }, // Add additional info text directly
    );

// Check deprecated option functions
setDefaults({
    inline: false,
    propTables: false,
});

storiesOf('Component', module)
    .add('no info', withInfo()(() => <Component>Click the "?" mark at top-right to view the info.</Component>))
    .add(
        'simple info',
        withInfo('doc string about my component')(() => (
            <Component>Click the "?" mark at top-right to view the info.</Component>
        )),
    )
    .add(
        'using an options object',
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
        })(() => <Component>Click the "?" mark at top-right to view the info.</Component>),
    );
