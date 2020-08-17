import { Attribute, AttributeWithOptions } from './Attribute';
import { Obj } from './Obj';

export type ExtractableTextAttributes = 'string' | 'html' | 'widgetlist' | 'blob:text' 

export interface ObjClassOptions {
    attributes: Record<string, Attribute | AttributeWithOptions>,
    extractTextAttributes?: string[];
    extend?: ObjClass;
}

export type ObjClass = typeof Obj;

export class AbstractObjClass {
    private constructor();
}


