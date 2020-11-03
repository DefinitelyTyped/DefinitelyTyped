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
            password?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            password: boolean;
            light?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            password: boolean;
        };
        notes?: undefined;
    })[];
};
export default _default;
