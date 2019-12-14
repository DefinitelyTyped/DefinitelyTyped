export class Field {
    readonly index: boolean;
}

export interface AttributeOpts {
    getDefault?: () => any;
}

export class Attribute extends Field {
    constructor(opts?: AttributeOpts);
    ['type']: 'attr';
}

export interface AttributeWithDefault extends Attribute {
    getDefault(): any;
}

export interface RelationalFieldOpts {
    to: string;
    relatedName?: string;
    through?: string;
    throughFields?: [string, string];
    as?: string;
}

export class RelationalField extends Field {
    constructor(toModelName: string, relatedName?: string);
    constructor(opts: RelationalFieldOpts);
}

export class OneToOne extends RelationalField {
    ['type']: 'oneToOne';
}

export class ForeignKey extends RelationalField {
    readonly index: true;
    ['type']: 'fk';
}

export class ManyToMany extends RelationalField {
    readonly index: false;
    ['type']: 'many';
}

export interface AttrCreator {
    (): Attribute;
    (opts: AttributeOpts): AttributeWithDefault;
}

export interface FkCreator {
    (toModelName: string, relatedName?: string): ForeignKey;
    (opts: RelationalFieldOpts): ForeignKey;
}

export interface ManyCreator {
    (toModelName: string, relatedName?: string): ManyToMany;
    (opts: RelationalFieldOpts): ManyToMany;
}

export interface OneToOneCreator {
    (toModelName: string, relatedName?: string): OneToOne;
    (opts: RelationalFieldOpts): OneToOne;
}

export const attr: AttrCreator;

export const oneToOne: OneToOneCreator;

export const fk: FkCreator;

export const many: ManyCreator;

export interface FieldSpecMap {
    [K: string]: Attribute | ForeignKey | ManyToMany | OneToOne;
}
