export default class RSocketError extends Error {
    readonly errorCode: number;
    constructor(errorCode: number, message: string);
}
