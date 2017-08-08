// Type definitions for react-jsonschema-form 0.43.0
// Project: https://github.com/mozilla-services/react-jsonschema-form
// Definitions by: Dan Fox <https://github.com/iamdanfox>, Jon Surrell <https://github.com/sirreal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-jsonschema-form" {
    import * as React from "react";

    export interface FormProps {
        schema: {};
        uiSchema?: {};
        formData?: any;
        widgets?: {};
        fields?: {};
        noValidate?: boolean;
        noHtml5Validate?: boolean;
        showErrorList?: boolean;
        validate?: (formData: any, errors: any) => any;
        onChange?: (e: IChangeEvent) => any;
        onError?: (e: any) => any;
        onSubmit?: (e: any) => any;
        liveValidate?: boolean;
        safeRenderCompletion?: boolean;
    }

    export interface IChangeEvent {
        edit: boolean;
        formData: any;
        errors: any[];
        errorSchema: any;
        idSchema: any;
        status: string;
    }

    export default class Form extends React.Component<FormProps> {}
}
