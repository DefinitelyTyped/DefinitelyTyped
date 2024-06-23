type genericShouldForwardProp = (prop: string) => boolean;

export const props: string[];
export function createShouldForwardProp(props: string[]): genericShouldForwardProp;

declare const shouldForwardProp: genericShouldForwardProp;
export default shouldForwardProp;
