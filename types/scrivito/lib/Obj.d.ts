import { Widget } from './Widget';


export interface CreateAttributes {
    attributes: any
}

export class Obj {
    constructor(arg: object);

    //@ts-ignore
    private readonly id: string;
    private readonly _createdAt: Date;
    private readonly _firstPublishedAt: Date;
    private readonly _lastChanged: Date;
    private _objClass: string;
    private _path: string;
    private _permalink: string;
    private readonly _publishedAt: Date;

    // Static methods
    static all(): any;
    static create(attributes: CreateAttributes): void;
    static createFromFile(file: File, attributes: CreateAttributes): void;
    static get(id: string): Obj | null;
    static getByPath(path: string): Obj | null;
    static getByPermalink(permalink: string): Obj | null;
    static root(): Obj;
    static where(attribute: string, operator: any, value: string, boost?: any): Obj[];

    // Instance methods
    //@ts-ignore
    id(): string;
    ancestors(): Obj[];
    backlings(): Obj[];
    children(): Obj[];
    contentLength(): number;
    contentType(): string;
    contentUrl(): string;
    copy(): Obj;
    createdAt(): Date;
    destroy(): void;
    firstPublishedAt(): Date | null;
    get(attributeName: string): any | null;
    isBinary(): boolean;
    isRestricted(): boolean;
    lastChanged(): Date | null;
    metadata(): any;
    objClass(): string;
    parent(): Obj | null;
    path(): string | null;
    permalink(): string | null;
    publishedAt(): Date | null;
    restrict(): void;
    slug(): String;
    unrestrict(): void;
    update(attributes: any): void;
    widget(id: string): Widget | null;
    widgets(): Widget[];
}
