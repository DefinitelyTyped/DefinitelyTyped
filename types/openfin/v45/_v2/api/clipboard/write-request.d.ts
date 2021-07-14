export interface WriteRequestType {
    data: string;
    type?: string | undefined;
}
export interface WriteAnyRequestType {
    data: {
        text?: string | undefined;
        html?: string | undefined;
        rtf?: string | undefined;
    };
    type?: string | undefined;
}
