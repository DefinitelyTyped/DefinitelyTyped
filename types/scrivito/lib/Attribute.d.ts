export type Attribute = 'date' | 'datetime' | 'enum' | 'multienum' | 'html' | 'string' | 'stringlist' | 'integer' | 'float' | 'binary' | 'link' | 'linklist' | 'reference' | 'referencelist' | 'widgetlist';
export interface AttributeOptions {
    values?: any[],
    only?: String | String[]
}
export type AttributeWithOptions = [Attribute, AttributeOptions]