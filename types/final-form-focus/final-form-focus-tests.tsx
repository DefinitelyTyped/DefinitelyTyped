import { Decorator, getIn } from 'final-form';
import createDecorator, { FindInput, FocusableInput, getFormInputs, GetInputs } from 'final-form-focus';

createDecorator(); // $ExpectType Decorator<object, object>

const inputs = getFormInputs('formName'); // $ExpectType GetInputs
createDecorator(inputs); // $ExpectType Decorator<object, object>

const findInput: FindInput = (inputs: FocusableInput[], errors: object) =>
    inputs.find(input => input.name && getIn(errors, input.name));

createDecorator(inputs, findInput); // $ExpectType Decorator<object, object>
