import FieldText, { FieldTextStateless, IFieldTextProp } from "@atlaskit/field-text";

import * as React from "react";
import { render } from "react-dom";

declare const container: Element;

// render without props is fine
render(    
    <FieldText/>,
    container
);

const baseFieldProp: IFieldTextProp = {
    autoComplete: 'on',
    form: 's',
    pattern: 's',
    compact: false,
    type: 'text',
    disabled: true,
    isReadOnly: false,
    required: true,
    label: 'Label',
    name: 'name',
    min: 1,
    max: 2,
    placeholder: 'Some placeholder...',
    value: 'text',
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {},
    onChange: (e: React.FormEvent<HTMLInputElement>) => {},
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {},
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {},
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => {},
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {},
    id: '1',
    isLabelHidden: false,
    invalidMessage: 'React Node',
    shouldFitContainer: false,
    isSpellCheckEnabled: false,
    autoFocus: true,
    maxLength: 25,
    isValidationHidden: false
}

// accepts all definitoin
render(    
    <FieldText
        {...baseFieldProp}
    />,
    container
)

// value can be a number as well
render(    
    <FieldText
        {...baseFieldProp}
        value={1}
    />,
    container
)

// render without props is fine
render(    
    <FieldTextStateless/>,
    container
);

render(    
    <FieldTextStateless
        {...baseFieldProp}        
    />,
    container
)

// value can be a number as well
render(    
    <FieldTextStateless
        {...baseFieldProp}   
        value={1}     
    />,
    container
)
