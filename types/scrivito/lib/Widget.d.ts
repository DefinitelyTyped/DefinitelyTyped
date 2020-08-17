import { Obj } from './Obj';

export class Widget {
    constructor(arg: object);
    private readonly _id: string;
    private _objClass: string;

    // Instace methods
    container(): Obj | Widget;
    copy(): void;
    destroy(): void;
    get(attributeName: string): any;
    id(): string;
    obj(): Obj;
    objClass(): string;
    update(attributes: any): void;
}
