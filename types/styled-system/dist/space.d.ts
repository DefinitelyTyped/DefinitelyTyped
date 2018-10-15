export type ResponsiveValue<T> = T | Array<T | null>;

export type SpaceValue = number | string;
export type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

export interface SpaceProps {
    m?: ResponsiveSpaceValue;
    mt?: ResponsiveSpaceValue;
    mr?: ResponsiveSpaceValue;
    mb?: ResponsiveSpaceValue;
    ml?: ResponsiveSpaceValue;
    mx?: ResponsiveSpaceValue;
    my?: ResponsiveSpaceValue;
    p?: ResponsiveSpaceValue;
    pt?: ResponsiveSpaceValue;
    pr?: ResponsiveSpaceValue;
    pb?: ResponsiveSpaceValue;
    pl?: ResponsiveSpaceValue;
    px?: ResponsiveSpaceValue;
    py?: ResponsiveSpaceValue;
}

export function space(...args: any[]): any;
