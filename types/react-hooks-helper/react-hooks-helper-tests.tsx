import * as React from 'react';
import { useStep, useForm } from 'react-hooks-helper';

export const ReactHooksHelperTest: React.FunctionComponent = () => {
    const { index, navigation } = useStep({ steps: 3 });
    const [formData, setForm] = useForm({ name: '', city: '' });

    return (
        <>
            <div id="step-1">
                Step: {index}
                <input name="name" onChange={setForm} />
                <button onClick={navigation.next}>Next</button>
            </div>
            <div id="step-2">
                Step: {index}
                <input name="city" onChange={setForm} />
                <button onClick={navigation.previous}>Back</button>
            </div>
            {JSON.stringify(formData)}
        </>
    );
};
