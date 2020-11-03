declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            id: string;
            exampleUploadStates?: undefined;
            legacy?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            id: string;
            exampleUploadStates: boolean;
            legacy?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            id: string;
            legacy: boolean;
            exampleUploadStates?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            id: string;
            legacy: boolean;
            exampleUploadStates: boolean;
        };
    })[];
};
export default _default;
