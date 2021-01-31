import * as React from 'react';
import Select from 'react-select';
import * as animatedComponents from 'react-select/animated';
import Async from 'react-select/async';
import AsyncCreatable from 'react-select/async-creatable';
import { colourOptions } from './data';

const AnimatedSelect = (props: React.ComponentProps<typeof Select>) => (
    <Select
        {...props}
        components={{
            ...animatedComponents,
            ...props.components,
        }}
    />
);

const defaultAsync = <Async />;
const defaultCreatableAsync = <AsyncCreatable />;
const SingleSelectWithValueArray = <Select options={colourOptions} value={[colourOptions[0]]} />;
const MultiSelectWithSingleValue = <Select options={colourOptions} value={colourOptions[0]} isMulti />;
const MultiSelectWithNullValue = <Select options={colourOptions} value={null} isMulti />;
