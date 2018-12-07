export interface WriteRequestType {
    data: string;
    type?: string;
}
export interface WriteAnyRequestType {
    data: {
        text?: string;
        html?: string;
        rtf?: string;
    };
    type?: string;
}
