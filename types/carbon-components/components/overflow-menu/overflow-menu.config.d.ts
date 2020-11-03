declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            direction: string;
            items: ({
                title: string;
                label: string;
                primaryFocus: boolean;
                disabled?: undefined;
                danger?: undefined;
            } | {
                label: string;
                title?: undefined;
                primaryFocus?: undefined;
                disabled?: undefined;
                danger?: undefined;
            } | {
                label: string;
                disabled: boolean;
                title?: undefined;
                primaryFocus?: undefined;
                danger?: undefined;
            } | {
                label: string;
                danger: boolean;
                title?: undefined;
                primaryFocus?: undefined;
                disabled?: undefined;
            })[];
            idSuffix: {
                default: string;
                flip: string;
                link: string;
            };
        };
    } | {
        name: string;
        label: string;
        context: {
            direction: string;
            items: ({
                title: string;
                label: string;
                primaryFocus: boolean;
                disabled?: undefined;
                danger?: undefined;
            } | {
                label: string;
                title?: undefined;
                primaryFocus?: undefined;
                disabled?: undefined;
                danger?: undefined;
            } | {
                label: string;
                disabled: boolean;
                title?: undefined;
                primaryFocus?: undefined;
                danger?: undefined;
            } | {
                label: string;
                danger: boolean;
                title?: undefined;
                primaryFocus?: undefined;
                disabled?: undefined;
            })[];
            idSuffix: {
                default: string;
                flip: string;
                link: string;
            };
        };
        notes?: undefined;
    })[];
};
export default _default;
