import * as React from 'react';
import Form from 'react-native-form';

function FormView() {
    return <Form ref="form"></Form>;
}

const customFields = {
    RadioButtons: {
        controlled: true,
        valueProp: 'selectedOption',
        callbackProp: 'onSelection',
    }
};

function FormViewWithCustomField() {
    return <Form ref="form" customFields={customFields}></Form>;
}

function FormViewWithViewProps() {
    return <Form ref="form" style={{ flex: 1 }}></Form>;
}
