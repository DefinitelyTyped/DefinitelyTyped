import React = require('react');

export interface FormProps {
    children: React.ReactNode[] | React.ReactNode;
    onSubmit?: ({ valid }?: { valid: boolean }) => void;
    onValidSubmit?: (values?: { [name: string]: string | undefined }) => void;
    noValidate?: boolean;
}

export class Form extends React.Component<FormProps> {}

export namespace Validations {
    function Required(params: { value?: string }): string;

    function CPF(params: { value?: string }, cpf?: string): string;

    function CEP(params: { value?: string }): string;

    function Date(params: { value?: string }): string;

    function MinLength(params: { value?: string; minLength?: string | number }): string;

    function MaxLength(params: { value?: string; maxLength?: string | number }): string;

    function Email(params: { value?: string }): string;
}
