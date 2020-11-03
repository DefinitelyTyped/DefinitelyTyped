declare const _: {
    preview: string;
    meta: {
        useIframe: boolean;
    };
    context: {
        featureFlags: any;
        prefix: any;
        rows: {
            breakpoint: string;
            columns: unknown[];
            title: string;
        }[];
    };
    variants: ({
        name: string;
        label: string;
        context?: undefined;
    } | {
        name: string;
        context: {
            rows: {
                breakpoint: string;
                columns: unknown[];
                title: string;
            }[];
        };
        label?: undefined;
    })[];
};
export default _;
