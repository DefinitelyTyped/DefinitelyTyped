declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            sections: {
                title: string;
                paneId: string;
            }[];
        };
    } | {
        name: string;
        label: string;
        context: {
            sections: {
                title: string;
            }[];
        };
        notes?: undefined;
    })[];
};
export default _default;
