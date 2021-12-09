export default class LesgoException {
    name: string;

    message: string;

    statusCode: number;

    code: string;

    extra: any;

    constructor(message: string, errorCode?: string, httpStatusCode?: number, extra?: any);
}
