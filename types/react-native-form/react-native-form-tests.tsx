import * as React from 'react';
import Form from 'react-native-form';

function FormView() {
    return <Form ref="form" />;
}

const customFields = {
    RadioButtons: {
        controlled: true,
        valueProp: 'selectedOption',
        callbackProp: 'onSelection',
    },
};

function FormViewWithCustomField() {
    return <Form ref="form" customFields={customFields} />;
}

function FormViewWithViewProps() {
    return <Form ref="form" style={{ flex: 1 }} />;
}
