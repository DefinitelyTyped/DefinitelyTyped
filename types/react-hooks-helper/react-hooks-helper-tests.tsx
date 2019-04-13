import * as React from 'react';
import { useStep, useForm } from 'react-hooks-helper';

export class ReactHooksHelperTest extends React.Component {
    public render() {
        const { index, navigation } = useStep({ steps: 3 })
        const [formData, setForm] = useForm({ name: '' , city: ''})
        return (
            <div>
                <div id="step-1">
                    Step: {index}
                    <input name="name" onChange={setForm} />
                    <button onCLick={navigation.next}>Next</button>
                </div>
                <div id="step-2">
                    Step: {index}
                    <input name="city" onChange={setForm} />
                    <button onCLick={navigation.previous}>Back</button>
                </div>
                { JSON.stringify(formData) }
            </div>
        );
    }
}
