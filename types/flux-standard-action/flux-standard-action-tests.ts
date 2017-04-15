
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
