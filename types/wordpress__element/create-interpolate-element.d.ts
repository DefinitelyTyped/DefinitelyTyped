export default createInterpolateElement;
/**
 * The stack frame tracking parse progress.
 */
declare function createInterpolateElement(
    interpolatedString: string,
    conversionMap: any,
): import('react').ReactElement<
    any,
    | string
    | ((props: any) => import('react').ReactElement<any, any>)
    | (new (props: any) => import('react').Component<any, any, any>)
>;
