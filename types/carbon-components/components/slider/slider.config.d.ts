declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            value: number;
            inputId: string;
            light?: undefined;
            disabled?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            value: number;
            inputId: string;
            disabled?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            disabled: boolean;
            value: number;
            inputId: string;
            light?: undefined;
        };
        notes?: undefined;
    })[];
};
export default _default;
