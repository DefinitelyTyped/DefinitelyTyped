// Type definitions for react-jsonschema-form 1.6.1
// Project: https://github.com/mozilla-services/react-jsonschema-form
// Definitions by: Dan Fox <https://github.com/iamdanfox>
//                 Ivan Jiang <https://github.com/iplus26>
//                 Philippe Bourdages <https://github.com/phbou72>
//                 Lucian Buzzo <https://github.com/LucianBuzzo>
//                 Sylvain Thénault <https://github.com/sthenault>
//                 Sebastian Busch <https://github.com/sbusch>
//                 Mehdi Lahlou <https://github.com/medfreeman>
//                 Saad Tazi <https://github.com/saadtazi>
//                 Agustin N. R. Ramirez <https://github.com/agustin107>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5


declare module "react-jsonschema-form" {
    import * as React from "react";
    import { JSONSchema6 } from "json-schema";

    type ErrorSchema = {
        [k: string]: ErrorSchema
    };

    export interface FormProps<T> {
        schema: JSONSchema6;
        disabled?: boolean;
        uiSchema?: UiSchema;
        formData?: T;
        formContext?: any;
        widgets?: { [name: string]: Widget };
        fields?: { [name: string]: Field };
        noValidate?: boolean;
        noHtml5Validate?: boolean;
        showErrorList?: boolean;
        ErrorList?: React.StatelessComponent<ErrorListProps>;
        validate?: (formData: T, errors: FormValidation) => FormValidation;
        onChange?: (e: IChangeEvent<T>, es?: ErrorSchema) => any;
        onError?: (e: any) => any;
        onSubmit?: (e: ISubmitEvent<T>) => any;
        liveValidate?: boolean;
        FieldTemplate?: React.StatelessComponent<FieldTemplateProps>;
        ArrayFieldTemplate?: React.StatelessComponent<ArrayFieldTemplateProps>;
        ObjectFieldTemplate?: React.StatelessComponent<
            ObjectFieldTemplateProps
        >;
        safeRenderCompletion?: boolean;
        transformErrors?: (errors: AjvError[]) => AjvError[];
        idPrefix?: string;

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

    export default class Form<T> extends React.Component<FormProps<T>> {}

    export type UiSchema = {
        "ui:field"?: Field | string;
        "ui:widget"?: Widget | string;
        "ui:options"?: object;
        "ui:order"?: string[];
        [name: string]: any;
    };

    export type FieldId = {
        $id: string;
    };

    export type IdSchema = FieldId & {
        [key: string]: FieldId;
    };

    export interface WidgetProps extends Pick<
        React.HTMLAttributes<HTMLElement>,
        Exclude<
            keyof React.HTMLAttributes<HTMLElement>,
            "onBlur"|"onFocus">
    > {
        id: string;
        schema: JSONSchema6;
        value: any;
        required: boolean;
        disabled: boolean;
        readonly: boolean;
        autofocus: boolean;
        onChange: (value: any) => void;
        options: object;
        formContext: any;
        onBlur: (id: string, value: boolean | number | string | null) => void;
        onFocus: (id: string, value: boolean | number | string | null) => void;
        label: string;
    }

    export type Widget =
        | React.StatelessComponent<WidgetProps>
        | React.ComponentClass<WidgetProps>;

    export interface FieldProps<T = any> extends React.HTMLAttributes<HTMLElement> {
        schema: JSONSchema6;
        uiSchema: UiSchema;
        idSchema: IdSchema;
        formData: T;
        errorSchema: ErrorSchema;
        onChange: (e: IChangeEvent<T> | any, es?: ErrorSchema) => any;
        registry: {
            fields: { [name: string]: Field };
            widgets: { [name: string]: Widget };
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

    export type Field =
        | React.StatelessComponent<FieldProps>
        | React.ComponentClass<FieldProps>;

    export type FieldTemplateProps = {
        id: string;
        classNames: string;
        label: string;
        description: React.ReactElement;
        rawDescription: string;
        children: React.ReactElement;
        errors: React.ReactElement;
        rawErrors: string[];
        help: React.ReactElement;
        rawHelp: string;
        hidden: boolean;
        required: boolean;
        readonly: boolean;
        disabled: boolean;
        displayLabel: boolean;
        fields: Field[];
        schema: JSONSchema6;
        uiSchema: UiSchema;
        formContext: any;
    };

    export type ArrayFieldTemplateProps = {
        DescriptionField: React.StatelessComponent<{ id: string, description: string | React.ReactElement }>;
        TitleField: React.StatelessComponent<{ id: string, title: string, required: boolean }>;
        canAdd: boolean;
        className: string;
        disabled: boolean;
        idSchema: IdSchema;
        items: {
            children: React.ReactElement;
            className: string;
            disabled: boolean;
            hasMoveDown: boolean;
            hasMoveUp: boolean;
            hasRemove: boolean;
            hasToolbar: boolean;
            index: number;
            onDropIndexClick: (index: number) => (event: any) => void;
            onReorderClick: (
                index: number,
                newIndex: number
            ) => (event: any) => void;
            readonly: boolean;
        }[];
        onAddClick: (event: any) => (event: any) => void;
        readonly: boolean;
        required: boolean;
        schema: JSONSchema6;
        uiSchema: UiSchema;
        title: string;
        formContext: any;
        formData: any;
    };

    export type ObjectFieldTemplateProps = {
        DescriptionField: React.StatelessComponent<{ id: string, description: string | React.ReactElement }>;
        TitleField: React.StatelessComponent<{ id: string, title: string, required: boolean }>;
        title: string;
        description: string;
        properties: {
            content: React.ReactElement;
            name: string;
            disabled: boolean;
            readonly: boolean;
        }[];
        required: boolean;
        schema: JSONSchema6;
        uiSchema: UiSchema;
        idSchema: IdSchema;
        formData: any;
        formContext: any;
    };

    export type AjvError = {
        message: string;
        name: string;
        params: any;
        property: string;
        stack: string;
    };

    export type ErrorListProps = {
        errorSchema: FormValidation;
        errors: AjvError[];
        formContext: any;
        schema: JSONSchema6;
        uiSchema: UiSchema;
    };

    export interface IChangeEvent<T = any> {
        edit: boolean;
        formData: T;
        errors: AjvError[];
        errorSchema: FormValidation;
        idSchema: IdSchema;
        schema: JSONSchema6;
        uiSchema: UiSchema;
        status?: string;
    }

    export type ISubmitEvent<T> = IChangeEvent<T>;

    export type FieldError = string;

    type FieldValidation = {
        __errors: FieldError[];
        addError: (message: string) => void;
    };

    type FormValidation = FieldValidation & {
        [fieldName: string]: FieldValidation;
    };

    type FormSubmit<T> = {
        formData: T;
    };

    export function withTheme<T>(
        themeProps: Omit<FormProps<T>, 'schema'>
    ): React.ComponentClass<FormProps<T>> | React.StatelessComponent<FormProps<T>>;
}

declare module "react-jsonschema-form/lib/utils" {
    import { JSONSchema6, JSONSchema6Definition } from "json-schema";
    import { FieldProps } from "react-jsonschema-form";

    export interface IRangeSpec {
        min?: number;
        max?: number;
        step?: number;
    }

    export function rangeSpec(schema: JSONSchema6): IRangeSpec;

    export function resolveSchema(
        schema: JSONSchema6Definition,
        definitions: FieldProps["registry"]["definitions"],
        formData: object
      ): JSONSchema6;
}

declare module "react-jsonschema-form/lib/validate" {
    import { JSONSchema6Definition } from "json-schema";
    import { AjvError } from "react-jsonschema-form";

    export default function validateFormData<T>(
        formData: T,
        schema: JSONSchema6Definition
    ): AjvError[];
}
