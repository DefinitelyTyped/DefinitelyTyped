// Type definitions for react-native-form 2.1
// Project: https://github.com/julianocomg/react-native-form#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { Component } from 'react';
import { ViewProps } from 'react-native';

export interface FormProps extends ViewProps {
    customFields?: {
        [key: string]: {
            callbackProp: string;
            controlled: boolean;
            valueProp: string;
        }
    };
    ref: string;
}

export default class Form extends Component<FormProps> { }
