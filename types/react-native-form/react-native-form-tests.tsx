import * as React from "react";
import Form from "react-native-form";

function FormView() {
    return <Form ref={React.createRef()}></Form>;
}

const customFields = {
    RadioButtons: {
        controlled: true,
        valueProp: "selectedOption",
        callbackProp: "onSelection",
    },
};

function FormViewWithCustomField() {
    return <Form ref={React.createRef()} customFields={customFields}></Form>;
}

function FormViewWithViewProps() {
    return <Form ref={React.createRef()} style={{ flex: 1 }}></Form>;
}
