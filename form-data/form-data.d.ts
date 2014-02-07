declare module "form-data" {
    export class FormData
    {
        append(key: string, value: any): FormData;
        getHeaders(): any;
        pipe(any): any;
    }
}