export class ClipRectangle {
    clipType: string;
    constructor(type: string);
    get type(): string;
    asMap(): Map<string, any>;
}

export class ElementClipRectangle extends ClipRectangle {
    #sharedId: string;
    #handleId?: string;
    constructor(sharedId: string, handleId?: string);
    asMap(): Map<string, any>;
}

export class BoxClipRectangle extends ClipRectangle {
    #x: number;
    #y: number;
    #width: number;
    #height: number;
    constructor(x: number, y: number, width: number, height: number);
    asMap(): Map<string, any>;
}
