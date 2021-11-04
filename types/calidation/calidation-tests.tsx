import * as React from 'react';
import {
    FieldsConfig,
    Form,
    FormContext,
    FormValidation,
    Transforms,
    Validation,
    ValidationContext,
    ValidatorContext,
    ValidatorsProvider,
    Fields,
    ValidatorsProviderProps,
} from 'calidation';

interface FieldTypes {
    foo: number;
    bar: string[];
}

const config: FieldsConfig<FieldTypes> = {
    foo: {
        isRequired: 'This field is required',
        isNumber: 'This field must be a number',
        isGreaterThan: {
            message: 'This field must be greater than 7',
            value: 7,
            validateIf: ({ isDirty, fields }) => isDirty && fields.bar.some(b => b === 'test'),
        },
    },
    bar: {},
};

const initialValues: Fields<FieldTypes> = { foo: 0, bar: [] };

const transforms: Transforms<FieldTypes> = {
    foo: parseInt,
};

function onChange(event: React.ChangeEvent<HTMLFormElement>): void {
    console.log(event);
}

function onReset(): void {
    console.log('form has been reset');
}

function onSubmit(context: FormContext<FieldTypes>): void {
    console.log(context);
}

function onUpdate(context: FormContext<FieldTypes>): void {
    console.log(context);
}

const extraValidators: ValidatorsProviderProps<FieldTypes>['validators'] = {
    isEven: config => value => (Number(value) % 2 !== 0 ? config.message : null),
    isOdd: (config, { errors, fields, isDirty }: ValidatorContext<FieldTypes>) => value => {
        if (!isDirty) {
            return null;
        }
        if (!fields.foo) {
            return null;
        }
        if (errors.foo) {
            return `Please address these errors ${errors.foo}`;
        }
        return Number(value) % 2 !== 1 ? config.message : null;
    },
};

const configWithCustomValidators: FieldsConfig<FieldTypes> = {
    foo: {
        isRequired: 'This field is required',
        isEven: {
            message: 'This needs to be an even number',
        },
    },
};
const FormTest = () => (
    <Form onChange={onChange} onReset={onReset} onSubmit={onSubmit} onUpdate={onUpdate}>
        <Validation config={config} initialValues={initialValues} transforms={transforms}>
            {({ dirty, errors, fields }: ValidationContext<FieldTypes>) => (
                <div>
                    <label>Input</label>
                    <input name="foo" type="number" value={`${fields.foo}`} />
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
        {({ dirty, errors, fields }: ValidationContext<FieldTypes>) => (
            <div>
                <label>Input</label>
                <input name="foo" value={`${fields.foo}`} />
                {dirty.foo && errors.foo && <p>{errors.foo}</p>}
            </div>
        )}
    </FormValidation>
);

const ValidatorsProviderTest = () => (
    <ValidatorsProvider validators={extraValidators}>
        <FormValidation
            onChange={onChange}
            onReset={onReset}
            onSubmit={onSubmit}
            onUpdate={onUpdate}
            config={configWithCustomValidators}
            initialValues={initialValues}
        >
            {({ dirty, errors, fields }: ValidationContext<FieldTypes>) => (
                <div>
                    <label>Input</label>
                    <input name="foo" value={`${fields.foo}`} />
                    {dirty.foo && errors.foo && <p>{errors.foo}</p>}
                </div>
            )}
        </FormValidation>
    </ValidatorsProvider>
);
