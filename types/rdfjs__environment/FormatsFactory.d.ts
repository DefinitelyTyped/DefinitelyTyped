import Formats from "./lib/Formats.js";

export interface FormatsFactory {
    formats: Formats;
    init(): void;
    clone(original: FormatsFactory): void;
}

interface FormatsFactoryCtor {
    new(): FormatsFactory;
}

declare const formatsFactory: FormatsFactoryCtor;

export default formatsFactory;
