import { Config } from './applyChangeToValue';

export interface Mention {
    display: string;
    childIndex: number;
    id: string | number;
    index: number;
    plainTextIndex: number;
}

export function getMentions(value: string, config: Partial<Config>): Mention[];
