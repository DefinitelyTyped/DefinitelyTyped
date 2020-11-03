declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            items: ({
                label: string;
                target: string;
                selected: boolean;
            } | {
                label: string;
                target: string;
                selected?: undefined;
            })[];
        };
    } | {
        name: string;
        label: string;
        context: {
            items: ({
                disabled: boolean;
                label: string;
                target: string;
                selected: boolean;
            } | {
                disabled: boolean;
                label: string;
                target: string;
                selected?: undefined;
            })[];
        };
        notes?: undefined;
    })[];
};
export default _default;
