import * as React from 'react';
import {
    Dictionary,
    FieldsConfig,
    Form,
    FormContext,
    FormValidation,
    Transforms,
    Validation,
    ValidationContext,
    ValidatorContext,
} from 'calidation';

const config: FieldsConfig = {
    foo: {
        isRequired: 'This field is required',
        isNumber: 'This field must be a number',
        isGreaterThan: {
            message: 'This field must be greater than 7',
            value: 7,
            validateIf: ({ isDirty }: ValidatorContext) => isDirty,
        },
    },
};

const initialValues: Dictionary = { foo: 0 };

const transforms: Transforms = { foo: parseInt };

function onChange(event: React.ChangeEvent<HTMLFormElement>): void {
    console.log(event);
}

function onReset(): void {
    console.log('form has been reset');
}

function onSubmit(context: FormContext): void {
    console.log(context);
}

function onUpdate(context: FormContext): void {
    console.log(context);
}

const FormTest = () => (
    <Form onChange={onChange} onReset={onReset} onSubmit={onSubmit} onUpdate={onUpdate}>
        <Validation config={config} initialValues={initialValues} transforms={transforms}>
            {({ dirty, errors, fields }: ValidationContext) => (
                <div>
                    <label>Input</label>
                    <input name="foo" value={`${fields.foo}`} />
                    {dirty.foo && errors.foo && <p>{errors.foo}</p>}
                </div>
            )}
        </Validation>
    </Form>
);

const FormValidationTest = () => (
    <FormValidation
        onChange={onChange}
        onReset={onReset}
        onSubmit={onSubmit}
        onUpdate={onUpdate}
        config={config}
        initialValues={initialValues}
        transforms={transforms}
    >
        {({ dirty, errors, fields }: ValidationContext) => (
            <div>
                <label>Input</label>
                <input name="foo" value={`${fields.foo}`} />
                {dirty.foo && errors.foo && <p>{errors.foo}</p>}
            </div>
        )}
    </FormValidation>
);
