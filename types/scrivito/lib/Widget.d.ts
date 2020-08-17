import { Obj } from './Obj';



export class Widget{
    constructor(arg: object);
    //@ts-ignore
    private readonly id: string;
    private _objClass: string;

    // Instace methods
    container(): Obj | Widget;
    copy(): void;
    destroy(): void;
    get(attributeName: string): any;
     //@ts-ignore
    id(): string;
    obj(): Obj;
    objClass(): String;
    update(attributes: any): void;

}
