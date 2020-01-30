import React = require('react');

type FormProps = {
    children: React.ReactNode[] | React.ReactNode;
    onSubmit?: () => void;
    onValidSubmit?: () => void;
    noValidate?: boolean;
};

export class Form extends React.Component<FormProps> {}

export class Validations {
    static Required: (params: { value?: string }) => string;

    static CPF: (params: { value?: string }, cpf?: string) => string;

    static CEP: (params: { value?: string }) => string;

    static Date: (params: { value?: string }) => string;

    static MinLength: (params: { value?: string; minLength?: string | number }) => string;

    static MaxLength: (params: { value?: string; maxLength?: string | number }) => string;

    static Email: (params: { value?: string }) => string;
}
