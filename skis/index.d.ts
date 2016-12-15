export interface Ski {
    name: string;
    binding?: Binding;
    width: number;
    height: number;
    type: string;
}

export interface Binding {
    name: string;
    type: string;
}
