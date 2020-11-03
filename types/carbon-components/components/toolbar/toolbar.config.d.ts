declare const _default: {
    context: {
        prefix: any;
    };
    variants: {
        name: string;
        label: string;
        context: {
            filterOptions: ({
                id: string;
                value: string;
                label: string;
                primaryFocus: boolean;
            } | {
                id: string;
                value: string;
                label: string;
                primaryFocus?: undefined;
            })[];
            rowHeightOptions: ({
                id: string;
                value: string;
                label: string;
                selected: boolean;
                primaryFocus: boolean;
            } | {
                id: string;
                value: string;
                label: string;
                selected?: undefined;
                primaryFocus?: undefined;
            })[];
        };
    }[];
};
export default _default;
