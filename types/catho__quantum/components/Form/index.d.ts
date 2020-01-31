import React = require('react');

export interface FormProps {
    children: React.ReactNode[] | React.ReactNode;
    onSubmit?: () => void;
    onValidSubmit?: () => void;
    noValidate?: boolean;
}

export class Form extends React.Component<FormProps> {}

export namespace Validations {
    const Required: (params: { value?: string }) => string;

    const CPF: (params: { value?: string }, cpf?: string) => string;

    const CEP: (params: { value?: string }) => string;

    const Date: (params: { value?: string }) => string;

    const MinLength: (params: { value?: string; minLength?: string | number }) => string;

    const MaxLength: (params: { value?: string; maxLength?: string | number }) => string;

    const Email: (params: { value?: string }) => string;
}
