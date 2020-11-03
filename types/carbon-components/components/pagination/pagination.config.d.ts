declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            version: string;
            itemsPerPageChoices: {
                value: string;
                label: string;
            }[];
            pageNumberChoices: {
                value: string;
                label: string;
            }[];
            totalPages: number;
            disabledPaginationButton?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            version: string;
            itemsPerPageChoices: {
                value: string;
                label: string;
            }[];
            totalPages: number;
            pageNumberChoices: {
                value: string;
                label: string;
            }[];
            disabledPaginationButton: boolean;
        };
        notes: string;
    })[];
};
export default _default;
