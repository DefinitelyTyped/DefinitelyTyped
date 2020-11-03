declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            mobile?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            mobile: boolean;
            light?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            mobile: boolean;
        };
        notes?: undefined;
    })[];
};
export default _default;
