import { Component } from "react";
import { ViewProps } from "react-native";

export interface FormProps extends ViewProps {
    customFields?: {
        [key: string]: {
            callbackProp: string;
            controlled: boolean;
            valueProp: string;
        };
    } | undefined;
    ref: string;
}

export default class Form extends Component<FormProps> {}
