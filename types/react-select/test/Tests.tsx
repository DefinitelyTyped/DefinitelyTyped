import * as React from 'react';
import Select from 'react-select/index';
import * as animatedComponents from 'react-select/animated';

const AnimatedSelect = (props: React.ComponentProps<typeof Select>) => (
    <Select
        {...props}
        components={{
            ...animatedComponents,
            ...props.components,
        }}
    />
);
