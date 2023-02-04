import Formats from './lib/Formats';

export interface FormatsFactory {
    formats: Formats;
    init(): void;
    clone(original: FormatsFactory): void;
}
