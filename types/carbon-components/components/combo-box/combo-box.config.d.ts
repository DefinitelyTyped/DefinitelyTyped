declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            items: ({
                id: string;
                label: string;
                selected?: undefined;
            } | {
                id: string;
                label: string;
                selected: boolean;
            })[];
            light?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            items: ({
                id: string;
                label: string;
                selected?: undefined;
            } | {
                id: string;
                label: string;
                selected: boolean;
            })[];
        };
    })[];
};
export default _default;
