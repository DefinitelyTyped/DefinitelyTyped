import * as React from 'react';
import {
        Form,
        FormError,
        FormInput,

        // Inputs
        Select,
        Checkbox,
        Textarea,
        NestedForm,
        Text,
        RadioGroup,
        Radio
} from 'react-form';

<Form />;

<Form>
        {() => null}
</Form>;

<Form>
        {() => <div/>}
</Form>;

<Form>
        { ({ submitForm }) => <button onClick={submitForm}>Submit</button> }
</Form>;

<FormError field="" />;

const CustomInput: React.SFC<React.HTMLAttributes<HTMLInputElement> & {field?: string}> =
        ({field, ...rest}) => {
                return (
                        <FormInput field={field}>
                                {({ setValue, getValue, setTouched }) => {
                                        return (
                                                <input
                                                        {...rest}
                                                        value={getValue()}
                                                        onChange={(e) => setValue(e.target.value)}
                                                        onBlur={() => setTouched(true)}
                                                />
                                        );
                                }}
                        </FormInput>
                );
        };

const events = {
        onChange: (e: React.SyntheticEvent<HTMLElement>, cb: () => void): null => null,
        onBlur: (e: React.SyntheticEvent<HTMLElement>, cb: () => void): null => null
};
const onClick = (e: React.SyntheticEvent<HTMLElement>, cb: () => void): null => null;

<Select options={[]} />;
<Select field="" options={[{label: '', value: '', disabled: false}]} {...events} />;

<Checkbox />;
<Checkbox field="" checked={false} {...events} />;

<Textarea />;
<Textarea field="" {...events} />;

<Form>
        <NestedForm>
                <Form />
        </NestedForm>
</Form>;

<Text />;
<Text field="" {...events} />;

<RadioGroup field="">
        <Radio />
        <Radio {...events} onClick={onClick}  />
</RadioGroup>;
