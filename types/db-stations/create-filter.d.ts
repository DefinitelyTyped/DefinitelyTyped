import { Station } from './';

export = createFilter;

declare function createFilter<TStation extends Station>(
    selector: 'all' | Partial<TStation>,
): (station: TStation) => boolean;
