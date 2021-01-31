import * as React from 'react';
import Select from 'react-select/index';
import * as animatedComponents from 'react-select/animated';
import Async from 'react-select/async';
import AsyncCreatable from 'react-select/async-creatable';

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
