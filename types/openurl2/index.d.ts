declare module "openurl" {
    export function open(url: string, callback?: (err: Error) => void): void;
    export function mailto(recipients: string[], fields: {[key: string]: string}, recipientsSeparator?: string, callback?: (err: Error) => void): void;
}