declare const _default: {
    default: string;
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            variant: string;
            pages: ({
                page: number;
                active: boolean;
            } | {
                page: number;
                active?: undefined;
            })[];
            showPagePrevious: {
                disabled: boolean;
            };
            showPageNext: boolean;
            elementAsAnchor?: undefined;
        };
    } | {
        name: string;
        label: string;
        notes: string;
        context: {
            variant: string;
            pages: ({
                page: number;
                active?: undefined;
                select?: undefined;
            } | {
                page: number;
                active: boolean;
                select?: undefined;
            } | {
                select: {
                    value: string;
                    page: string;
                }[];
                page?: undefined;
                active?: undefined;
            })[];
            showPagePrevious: boolean;
            showPageNext: boolean;
            elementAsAnchor?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            variant: string;
            pages: ({
                page: number;
                active: boolean;
            } | {
                page: number;
                active?: undefined;
            })[];
            showPagePrevious: {
                disabled: boolean;
            };
            showPageNext: boolean;
            elementAsAnchor: boolean;
        };
        notes?: undefined;
    })[];
};
export default _default;
