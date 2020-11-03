declare const _default: {
    context: {
        prefix: any;
        items: {
            label: string;
        }[];
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
            items: ({
                label: string;
            } | {
                current: boolean;
                label: string;
            })[];
        };
        notes?: undefined;
    })[];
};
export default _default;
