declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            tags: {
                type: string;
                label: string;
            }[];
            filter?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            filter: boolean;
            tags?: undefined;
        };
    })[];
};
export default _default;
