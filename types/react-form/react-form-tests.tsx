// Demo from https://github.com/tannerlinsley/react-form/blob/7c187f2e1fc13b437f0e21c3747cf6ac56c51f6c/docs/examples.md
// https://codesandbox.io/s/react-form-demo-950ww

import * as React from 'react';

import { splitFormProps, useField, UseFieldInstance, UseFieldInstanceMeta, UseFieldOptions, useForm } from 'react-form';

async function sendToFakeServer(values: Record<string, string>) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return values;
}

function validateAddressStreet(value: string): string | false {
    if (!value) {
        return 'A street is required';
    }
    return false;
}

async function validateName(name: string, instance: UseFieldInstance<any, any, any, any, any, any>): Promise<any> {
    if (!name) {
        return 'A name is required';
    }

    return instance.debounce(async () => {
        console.log('checking name');
        await new Promise(resolve => setTimeout(resolve, 1000));
        // All names are valid, so return a false error
        return false;
    }, 500);
}

function NameField() {
    const {
        meta: { error, isTouched, isValidating },
        getInputProps,
    } = useField('name', {
        validate: validateName as any,
    });

    return (
        <>
            <input {...getInputProps()} />{' '}
            {isValidating ? <em>Validating...</em> : isTouched && error ? <em>{error}</em> : null}
        </>
    );
}

function AddressStreetField() {
    const {
        meta: { error, isTouched, isValidating },
        getInputProps,
    } = useField('address.street', {
        validate: validateAddressStreet,
    });

    return (
        <>
            <input {...getInputProps()} />{' '}
            {isValidating ? <em>Validating...</em> : isTouched && error ? <em>{error}</em> : null}
        </>
    );
}

function MyForm() {
    // Use the useForm hook to create a form instance
    const {
        Form,
        meta: { isSubmitting, canSubmit },
    } = useForm({
        onSubmit: async (values, instance) => {
            // onSubmit (and everything else in React Form)
            // has async support out-of-the-box
            await sendToFakeServer(values);
            console.log('Huzzah!');
        },
        debugForm: true,
    });

    return (
        <Form>
            <div>
                <label>
                    Name: <NameField />
                </label>
            </div>
            <div>
                <label>
                    Address Street: <AddressStreetField />
                </label>
            </div>

            <div>
                <button type="submit" disabled={!canSubmit}>
                    Submit
                </button>
            </div>

            <div>
                <em>{isSubmitting ? 'Submitting...' : null}</em>
            </div>
        </Form>
    );
}

function App() {
    return <MyForm />;
}

// https://codesandbox.io/s/react-form-demo-wrybd?file=/src/index.js:86-2387

async function fakeCheckValidName(name: string, instance: UseFieldInstance<any, any, any, any, any, any>) {
    if (!name) {
        return 'A name is required';
    }

    return instance.debounce(async () => {
        console.log('checking name');
        await new Promise(resolve => setTimeout(resolve, 1000));
        // All names are valid, so return a false error
        return false;
    }, 500);
}

type InputFieldProps = React.PropsWithChildren<{
    field: string;
    validate?: UseFieldOptions<any, any, any, any, any, any>['validate'];
}>;

const InputField = React.forwardRef((props: InputFieldProps, ref) => {
    // Let's use splitFormProps to get form-specific props
    const [field, fieldOptions, rest] = splitFormProps(props);

    // Use the useField hook with a field and field options
    // to access field state
    const {
        meta: { error, isTouched, isValidating },
        getInputProps,
    } = useField(field, fieldOptions);

    // Build the field
    return (
        <>
            <input {...getInputProps({ ref, ...rest })} />{' '}
            {isValidating ? <em>Validating...</em> : isTouched && error ? <em>{error}</em> : null}
        </>
    );
});

function SecondMyForm() {
    // Use the useForm hook to create a form instance
    const {
        Form,
        meta: { isSubmitting, canSubmit, isTouched },
    } = useForm({
        onSubmit: async (values, instance) => {
            // onSubmit (and everything else in React Form)
            // has async support out-of-the-box
            await sendToFakeServer(values);
            console.log('Huzzah!');
        },
        debugForm: true,
    });

    return (
        <Form>
            <div>
                <label>
                    Name: <InputField field="name" validate={fakeCheckValidName as any} />
                </label>
            </div>
            <div>
                <label>
                    Address Street: <InputField field="address.street" validate={validateAddressStreet} />
                </label>
            </div>

            <div>
                <button type="submit" disabled={!(canSubmit && isTouched)}>
                    Submit
                </button>
            </div>

            <div>
                <em>{isSubmitting ? 'Submitting...' : null}</em>
            </div>
        </Form>
    );
}

function SecondApp() {
    return <SecondMyForm />;
}

// https://codesandbox.io/s/react-form-demo-q9mgm?file=/src/index.js:0-5176

interface InputFieldThirdMeta extends UseFieldInstanceMeta<string> {
    message: string;
}

interface InputFieldThirdProps extends InputFieldProps {
    type?: string;
    defaultValue?: string;
    min?: string;
}

const InputFieldThird = React.forwardRef((props: InputFieldThirdProps, ref) => {
    // Let's use splitFormProps to get form-specific props
    const [field, fieldOptions, rest] = splitFormProps(props);

    // Use the useField hook with a field and field options
    // to access field state
    const {
        meta: { error, isTouched, isValidating, message },
        getInputProps,
    } = useField<string, string, unknown, InputFieldThirdMeta>(field, fieldOptions);

    // Build the field
    return (
        <>
            <input {...getInputProps({ ref, ...rest })} />

            {/*
        Let's inline some validation and error information
        for our field
      */}

            {isValidating ? (
                <em>Validating...</em>
            ) : isTouched && error ? (
                <strong>{error}</strong>
            ) : message ? (
                <small>{message}</small>
            ) : null}
        </>
    );
});

function ThirdApp() {
    const defaultValues = React.useMemo(
        () => ({
            name: 'tanner',
            age: '29',
            email: 'tanner@gmail.com',
            friends: ['jaylen'],
        }),
        [],
    );
    const {
        Form,
        values,
        pushFieldValue,
        removeFieldValue,
        meta: { isSubmitting, isSubmitted, canSubmit, error },
    } = useForm<string | string[]>({
        defaultValues,
        validate: values => {
            if (values.name === 'tanner' && values.age !== '29') {
                return "This is not tanner's correct age";
            }
            return false;
        },
        onSubmit: async (values, instance) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(values);
        },
        debugForm: true,
    });

    return (
        <Form>
            <div>
                <label>
                    Name: <InputFieldThird field="name" validate={value => (!value ? 'Required' : false)} />
                </label>
            </div>
            <div>
                <label>
                    Age:{' '}
                    <InputFieldThird
                        field="age"
                        type="number"
                        validate={value => (value < 10 ? 'You must be at least 10 years old' : false)}
                        min="1"
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:{' '}
                    <InputFieldThird
                        field="email"
                        validate={async value => {
                            if (!value) {
                                return 'Email is required';
                            }

                            if (!validateEmail(value)) {
                                return 'Please enter a valid email addresss';
                            }

                            console.log(`Checking email: ${value}...`);

                            // We're going to mock that for now
                            await new Promise(resolve => setTimeout(resolve, 2000));

                            return value === 'tanner@gmail.com' ? 'Email is already being used' : false;
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Username:{' '}
                    <InputFieldThird
                        field="username"
                        validate={
                            ((value: string, { debounce, setMeta }: any) => {
                                console.log('checkusername');
                                if (!value) {
                                    return 'Username is required';
                                }

                                return debounce(async () => {
                                    console.log('Checking username...');
                                    await new Promise(resolve => setTimeout(resolve, 2000));
                                    if (value === 'tanner') {
                                        setMeta({ error: 'Username is unavailable', message: null });
                                        return;
                                    }

                                    setMeta({ error: null, message: 'Username is available!' });
                                }, 2000);
                            }) as any
                        }
                    />
                </label>
            </div>
            <div>
                <label>
                    Notes: <InputFieldThird field="other.notes" defaultValue="This is a note." />
                </label>
            </div>
            <div>
                Friends
                <div
                    style={{
                        border: '1px solid black',
                        padding: '1rem',
                    }}
                >
                    {(values.friends as string[]).map((friend, i) => (
                        <div key={i}>
                            <label>
                                Friend: <InputFieldThird field={`friends.${i}`} />{' '}
                                <button type="button" onClick={() => removeFieldValue('friends', i)}>
                                    X
                                </button>
                            </label>
                        </div>
                    ))}
                    <button type="button" onClick={() => pushFieldValue('friends', '')}>
                        Add Friend
                    </button>
                </div>
            </div>

            {isSubmitted ? <em>Thanks for submitting!</em> : null}

            {error ? <strong>{error}</strong> : null}

            {isSubmitting ? (
                'Submitting...'
            ) : (
                <div>
                    <button type="submit" disabled={!canSubmit}>
                        Submit
                    </button>
                </div>
            )}
        </Form>
    );
}

function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// https://codesandbox.io/s/react-form-custom-select-multi-select-inputs-q5ixs?file=/src/index.js

function SelectField(props: any) {
    const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

    const {
        value = '',
        setValue,
        meta: { error, isTouched },
    } = useField(field, fieldOptions);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };

    return (
        <>
            <select {...rest} value={value} onChange={handleSelectChange}>
                <option disabled value="" />
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>{' '}
            {isTouched && error ? <em>{error}</em> : null}
        </>
    );
}

function MultiSelectField(props: any) {
    const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

    const {
        value = [],
        setValue,
        meta: { isTouched, error },
    } = useField<string[]>(field, fieldOptions);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = Array.from(e.target.options)
            .filter(option => option.selected)
            .map(option => option.value);

        setValue(selected);
    };

    return (
        <>
            <select {...rest} value={value} onChange={handleSelectChange} multiple>
                <option disabled value="" />
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {isTouched && error ? <em>{error}</em> : null}
        </>
    );
}

function FourthMyForm() {
    const {
        Form,
        meta: { canSubmit },
    } = useForm({
        debugForm: true,
        onSubmit: values => {
            console.log('Huzzah!', values);
        },
    });

    return (
        <Form>
            <div>
                <label>
                    Favorite Color:{' '}
                    <SelectField
                        field="favoriteColor"
                        options={['Red', 'Blue', 'Green', 'Yellow']}
                        validate={(value: string) => (!value ? 'This is required!' : false)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Favorite Colors:{' '}
                    <MultiSelectField
                        field="favoriteColors"
                        options={['Red', 'Blue', 'Green', 'Yellow']}
                        validate={(value: string) => (value.length < 2 ? 'At least 2 colors are required!' : false)}
                    />
                </label>
            </div>

            <div>
                <button type="submit" disabled={!canSubmit}>
                    Submit
                </button>
            </div>
        </Form>
    );
}

// Few tests

export function EmailField(props: any): JSX.Element {
    const data = useField('email', {
        defaultValue: props.defaultValue,
        defaultError: props.defaultError,
    });

    const inputProps = data.getInputProps({
        onChange: () => {
            data.form.setMeta({
                error: undefined,
            });
        },
    });

    return (
        <div>
            <input {...inputProps} />
            {data.meta.error || props.defaultError ? (
                <div className="error">{data.meta.error || props.defaultError}</div>
            ) : null}
        </div>
    );
}
