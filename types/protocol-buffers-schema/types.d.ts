export interface Option {
    [key: string]: string | boolean;
}

export interface Options {
    [key: string]: string | boolean | Option | Option[];
}

export interface Enum {
    name: string;
    values: {
        [key: string]: {
            value: number;
            options: Options;
        };
    };
    options: Options;
}

export interface FieldOptions {
    [key: string]: string;
}

export interface Field {
    name: string;
    type: string;
    tag: number;
    map: {
        from: string;
        to: string;
    };
    oneof: null | string;
    required: boolean;
    repeated: boolean;
    options: FieldOptions;
}

export interface Message {
    name: string;
    enums: Enum[];
    extends: Extend[];
    extensions: Extension[];
    messages: Message[];
    fields: Field[];
}

export interface Extend {
    name: string;
    message: Message;
}

export interface Extension {
    from: number;
    to: number;
}

export interface Service {
    name: string;
    methods: Method[];
    options: Options;
}

export interface Method {
    name: string;
    input_type: string;
    output_type: string;
    client_streaming: boolean;
    server_streaming: boolean;
    options: Options;
}

export interface Schema {
    syntax: number;
    package: null | string;
    imports: string[];
    enums: Enum[];
    messages: Message[];
    options: Options;
    extends: Extend[];
    services?: Service[];
}
