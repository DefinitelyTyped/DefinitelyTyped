
//import action = require('flux-standard-action');
import { isError, isFSA, Action, ErrorAction } from 'flux-standard-action';

interface TextPayload {
    text: string;
}

var sample1: Action<TextPayload> = {
    type: 'ADD_TODO',
    payload: {
        text: 'Do something.'
    }
};

var sample2: ErrorAction = {
    type: 'ADD_TODO',
    payload: new Error(),
    error: true
};

var result1: boolean = isError(sample1);
var result2: boolean = isFSA(sample1);
var result3: boolean = isError(sample2);
var result4: boolean = isFSA(sample2);

declare function alert (message: string): void

function unwrapAction(action: { type: string }) {
    if (isFSA(action)) {
        if (isError(action)) {
            alert(action.payload!.message)
        }
        return action.payload
    }
}

var result5: TextPayload = unwrapAction(sample1)
var result6: Error = unwrapAction(sample2)
