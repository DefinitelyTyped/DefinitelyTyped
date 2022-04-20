export class MessageBinding {
    constructor(
        owner: MessageDispatcher,
        name: string,
        callback: (...params: any[]) => void,
        isOnce: boolean,
        context?: any,
        type?: BindingType,
        pathPattern?: string | null,
    );
    owner: MessageDispatcher;
    name: string;
    callback: (...params: any[]) => void;
    isOnce: boolean;
    context: any;
    pathPattern: string | null;
    glob: Glob | null;
    type: BindingType;
    off(): void;
    __reset(): MessageBinding;
}
import { Glob } from '../utils/Glob';
import { BindingType } from './BindingType';
import { MessageDispatcher } from './MessageDispatcher';
