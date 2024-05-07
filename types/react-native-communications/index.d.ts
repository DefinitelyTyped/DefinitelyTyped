export function phonecall(phoneNumber: string, isPrompt: boolean): void;
export function email(): void;
export function email(
    to: string[] | null,
    cc: string[] | null,
    bcc: string[] | null,
    subject: string | null,
    body: string | null,
): void;
export function text(phoneNumber?: string | null, body?: string | null): void;
export function textWithoutEncoding(phoneNumber?: string | null, body?: string | null): void;
export function web(address?: string | null): void;
