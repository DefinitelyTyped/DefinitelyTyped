import React = require('react');

export interface FormProps {
    children: React.ReactNode[] | React.ReactNode;
    onSubmit?: () => void;
    onValidSubmit?: () => void;
    noValidate?: boolean;
}

export class Form extends React.Component<FormProps> {}

export namespace Validations {
    export function Required(params: { value?: string }): string;

    export function CPF(params: { value?: string }, cpf?: string): string;

    export function CEP(params: { value?: string }): string;

    export function Date(params: { value?: string }): string;

    export function MinLength(params: { value?: string; minLength?: string | number }): string;

    export function MaxLength(params: { value?: string; maxLength?: string | number }): string;

    export function Email(params: { value?: string }): string;
}
