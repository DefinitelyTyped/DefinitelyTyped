import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import { LinkDecoratorAutomaticDefinition } from '../link';

export default class AutomaticDecorators {
    add(item: LinkDecoratorAutomaticDefinition | LinkDecoratorAutomaticDefinition[]): void;
    getDispatcher(): (dispatcher: DowncastDispatcher) => void;
    getDispatcherForLinkedImage(): (dispatcher: DowncastDispatcher) => void;
    readonly length: number;
}
