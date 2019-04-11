// Type definitions for recaptcha2 1.3
// Project: https://github.com/fereidani/recaptcha2#readme
// Definitions by: Jonas Lochmann <https://github.com/l-jonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = Recaptcha2;

declare class Recaptcha2 {
  constructor(options: Recaptcha2.Options);

  getRequestOptions<T extends object>(body: T): Recaptcha2.RequestOptions<T>;
  validate(token: string): Promise<void>;
  validateRequest(req: object, ip: string): Promise<void>;
  translateErrors(errorCodes: string): string;
  translateErrors(errorCodes: string[]): string[];
  formElement(htmlClass: string): string;
}

declare namespace Recaptcha2 {
  interface Options {
    siteKey: string;
    secretKey: string;
    ssl?: boolean;
  }

  interface RequestOptions<T> {
    uri: string;
    method: 'POST';
    json: true;
    form: T;
  }
}
