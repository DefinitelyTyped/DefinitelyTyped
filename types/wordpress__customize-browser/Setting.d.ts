import { Control } from './Control';
import { Previewer } from './Previewer';
import { Value } from './Value';

export interface Setting_Options {
    transport: string;
    dirty: boolean;
    previewer: Previewer<string>;
}

export class Setting<T> extends Value<T> {
    defaults: Setting_Options;
    initialize(id?: string, value?: any, options?: Partial<Setting_Options>): void;
    preview(): void;
    findControls(): Control[];
}
