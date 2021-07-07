import { ColorDefinition } from '@ckeditor/ckeditor5-ui/src/colorgrid/colorgridview';
import { Collection } from '@ckeditor/ckeditor5-utils';
import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

export default class DocumentColorCollection extends Collection<ColorDefinition> implements Observable {
    set(option: Record<string, string>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
    isEmpty: boolean;
    add(item: ColorDefinition, index?: number): this;
    hasColor(color: string): boolean;
}
