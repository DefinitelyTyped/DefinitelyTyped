export interface VariantArgs {
    key?: string;
    // Defaults to "variant"
    prop?: string;
}

export function variant(props: VariantArgs): (...args: any[]) => any;
