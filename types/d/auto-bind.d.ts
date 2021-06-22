export = autoBind;

declare function autoBind(
    obj: { [key: string]: PropertyDescriptor },
    options?: autoBind.Options
): PropertyDescriptorMap;

declare namespace autoBind {
    interface Options {
        overwriteDefinition?: boolean;
        resolveContext?: (context: any) => any;
    }
}
