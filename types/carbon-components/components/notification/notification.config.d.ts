declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            variant: string;
            items: {
                type: string;
                title: string;
                subtitle: string;
                timestamp: string;
            }[];
            lowContrast?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            variant: string;
            lowContrast: boolean;
            items: {
                type: string;
                title: string;
                subtitle: string;
                timestamp: string;
            }[];
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        notes: string;
        context: {
            variant: string;
            items: {
                type: string;
                title: string;
                subtitle: string;
                timestamp: string;
            }[];
            lowContrast?: undefined;
        };
    } | {
        name: string;
        label: string;
        notes: string;
        context: {
            variant: string;
            lowContrast: boolean;
            items: {
                type: string;
                title: string;
                subtitle: string;
                timestamp: string;
            }[];
        };
    })[];
};
export default _default;
