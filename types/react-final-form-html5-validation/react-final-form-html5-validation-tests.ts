import { createElement } from 'react';
import { Field as FieldNative } from 'react-final-form';
import { Field } from 'react-final-form-html5-validation';

// $ExpectType FieldNative
const WithName = createElement(
    Field,
    {
        name: 'no-props'
    }
);

// $ExpectType FieldNative
const WithRender = createElement(
    Field,
    {
        name: 'field-props',
        render: ({ input }) => createElement(
            'input',
            input
        )
    }
);

// $ExpectType Field
const WithHtml5Fields = createElement(
    Field,
    {
        name: 'field-props',
        min: 0,
        max: 5,
        value: 3,
        render: ({ input }) => createElement(
            'input',
            input
        )
    }
);
