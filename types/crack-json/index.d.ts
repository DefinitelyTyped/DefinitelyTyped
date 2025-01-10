export function extractJson(
    subject: string,
    configuration?: {
        filter?: (input: string) => boolean;
        parser?: (input: string) => any;
    },
): any;
