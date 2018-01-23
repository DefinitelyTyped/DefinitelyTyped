// Type definitions for react-jsonschema-form 1.0.0
// Project: https://github.com/mozilla-services/react-jsonschema-form
// Definitions by: Dan Fox <https://github.com/iamdanfox>
//                 Jon Surrell <https://github.com/sirreal>
//                 Ivan Jiang <https://github.com/iplus26>
//                 Kurt Preston <https://github.com/KurtPreston>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-jsonschema-form" {
    import * as React from "react";
    import { JSONSchema4 } from "json-schema";

    export interface FormProps {
        schema: JSONSchema4;
        uiSchema?: UiSchema;
        formData?: any;
        formContext?: any;
        widgets?: {[name: string]: Widget};
        fields?: {[name: string]: Field};
        noValidate?: boolean;
        noHtml5Validate?: boolean;
        showErrorList?: boolean;
        validate?: (formData: any, errors: any) => any;
        onChange?: (e: IChangeEvent) => any;
        onError?: (e: any) => any;
        onSubmit?: (e: any) => any;
        liveValidate?: boolean;
        FieldTemplate?: React.StatelessComponent<FieldTemplateProps>;
        ArrayFieldTemplate?: React.StatelessComponent<ArrayFieldTemplateProps>;
        ObjectFieldTemplate?: React.StatelessComponent<ObjectFieldTemplateProps>;
        safeRenderCompletion?: boolean;
        transformErrors?: (errors: any) => any;

        // HTML Attributes
        id?: string;
        className?: string;
        name?: string;
        method?: string;
        target?: string;
        action?: string;
        autocomplete?: string;
        enctype?: string;
        acceptcharset?: string;
    }

    export default class Form extends React.Component<FormProps> { }

    export type UiSchema = {
        'ui:field'?: Field | string;
        'ui:widget'?: Widget | string;
        'ui:options'?: object;
        'ui:order'?: string[];
        [name: string]: any;
    };

    export type IdSchema = {
        $id: string;
    };

    export interface WidgetProps extends React.HTMLAttributes<HTMLElement> {
        id: string;
        schema: JSONSchema4;
        value: any;
        required: boolean;
        disabled: boolean;
        readonly: boolean;
        autofocus: boolean;
        onChange: (value: any) => void;
        options: object;
        formContext: any;
    }

    export type Widget = React.StatelessComponent<WidgetProps> | React.ComponentClass<WidgetProps>;

    export interface FieldProps extends React.HTMLAttributes<HTMLElement> {
        schema: JSONSchema4;
        uiSchema: UiSchema;
        idSchema: IdSchema;
        formData: any;
        errorSchema: object;
        onChange: (value: any) => void;
        registry: {
            fields: {[name: string]: Field};
            widgets: {[name: string]: Widget};
            definitions: object;
            formContext: any;
        };
        formContext: any;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean;
        required: boolean;
        name: string;
        [prop: string]: any;
    }

    export type Field = React.StatelessComponent<FieldProps> | React.ComponentClass<FieldProps>;

    export type FieldTemplateProps = {
        id: string;
        classNames: string;
        label: string;
        description: React.ReactElement<any>;
        rawDescription: string;
        children: React.ReactElement<any>;
        errors: React.ReactElement<any>;
        rawErrors: string[];
        help: React.ReactElement<any>;
        rawHelp: string;
        hidden: boolean;
        required: boolean;
        readonly: boolean;
        disabled: boolean;
        displayLabel: boolean;
        fields: Field[];
        schema: JSONSchema4;
        uiSchema: UiSchema;
        formContext: any;
    }

    export type ArrayFieldTemplateProps = {
        DescriptionField: object;
        TitleField: object;
        canAdd: boolean;
        className: string;
        disabled: boolean;
        idSchema: IdSchema;
        items: {
            children: React.ReactElement<any>,
            className: string;
            disabled: boolean;
            hasMoveDown: boolean;
            hasMoveUp: boolean;
            hasRemove: boolean;
            hasToolbar: boolean;
            index: number;
            onDropIndexClick: (index: number) => (event: any) => void;
            onReorderClick: (index: number, newIndex: number) => (event: any) => void;
            readonly: boolean;
        }[];
        onAddClick: (event: any) => (event: any) => void;
        readonly: boolean;
        required: boolean;
        schema: JSONSchema4;
        uiSchema: UiSchema;
        title: string;
        formContext: any;
        formData: any;
    }

    export type ObjectFieldTemplateProps = {
        DescriptionField: object;
        TitleField: object;
        title: string;
        description: string;
        properties: {
            content: React.ReactElement<any>,
            name: string;
            disabled: boolean;
            readonly: boolean;
        }[],
        required: boolean;
        schema: JSONSchema4;
        uiSchema: UiSchema;
        idSchema: IdSchema;
        formData: any;
        formContext: any;
    }

    export interface IChangeEvent {
        edit: boolean;
        formData: any;
        errors: any[];
        errorSchema: any;
        idSchema: IdSchema;
        status: string;
    }
}
