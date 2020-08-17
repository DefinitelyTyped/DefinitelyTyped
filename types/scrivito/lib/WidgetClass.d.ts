import { Widget } from './Widget';
import { Attribute, AttributeWithOptions } from './Attribute';

export interface WidgetClassOptions {
    attributes: Record<string, Attribute | AttributeWithOptions>;
    extractTextAttributes?: string[];
    extend?: WidgetClass;
    onlyInside?: string | string[];
}

export type WidgetClass = typeof Widget;

export abstract class AbstractWidgetClass {
}
