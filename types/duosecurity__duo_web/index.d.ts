export const ERR_USER: string;
export const ERR_IKEY: string;
export const ERR_SKEY: string;
export const ERR_AKEY: string;

export function sign_request(
    ikey: string,
    skey: string,
    akey: string,
    username: string,
): string;

export function verify_response(
    ikey: string,
    skey: string,
    akey: string,
    sig_response: string,
): string | null;
