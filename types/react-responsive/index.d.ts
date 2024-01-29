import * as React from "react";

export interface MediaQueryTypes {
    all?: boolean | undefined;
    grid?: boolean | undefined;
    aural?: boolean | undefined;
    braille?: boolean | undefined;
    handheld?: boolean | undefined;
    print?: boolean | undefined;
    projection?: boolean | undefined;
    screen?: boolean | undefined;
    tty?: boolean | undefined;
    tv?: boolean | undefined;
    embossed?: boolean | undefined;
}

export type MediaQueryType = keyof MediaQueryTypes;

export interface MediaQueryMatchers {
    aspectRatio?: string | undefined;
    deviceAspectRatio?: string | undefined;
    height?: number | string | undefined;
    deviceHeight?: number | string | undefined;
    width?: number | string | undefined;
    deviceWidth?: number | string | undefined;
    color?: boolean | undefined;
    colorIndex?: boolean | undefined;
    monochrome?: boolean | undefined;
    resolution?: number | string | undefined;
    orientation?: "portrait" | "landscape" | undefined;
    scan?: "progressive" | "interlace" | undefined;
    type?: MediaQueryType | undefined;
}

export interface MediaQueryFeatures extends MediaQueryMatchers {
    minAspectRatio?: string | undefined;
    maxAspectRatio?: string | undefined;

    minDeviceAspectRatio?: string | undefined;
    maxDeviceAspectRatio?: string | undefined;

    minHeight?: number | string | undefined;
    maxHeight?: number | string | undefined;

    minDeviceHeight?: number | string | undefined;
    maxDeviceHeight?: number | string | undefined;

    minWidth?: number | string | undefined;
    maxWidth?: number | string | undefined;

    minDeviceWidth?: number | string | undefined;
    maxDeviceWidth?: number | string | undefined;

    minColor?: number | undefined;
    maxColor?: number | undefined;

    minColorIndex?: number | undefined;
    maxColorIndex?: number | undefined;

    minMonochrome?: number | undefined;
    maxMonochrome?: number | undefined;

    minResolution?: number | string | undefined;
    maxResolution?: number | string | undefined;
}

export interface MediaQueryAllQueryable extends MediaQueryFeatures, MediaQueryTypes {}

export interface MediaQueryProps extends MediaQueryAllQueryable {
    component?: React.ElementType | undefined;
    query?: string | undefined;
    style?: React.CSSProperties | undefined;
    className?: string | undefined;
    children?: React.ReactNode | ((matches: boolean) => React.ReactNode) | undefined;
    device?: MediaQueryMatchers | undefined;
    values?: Partial<MediaQueryMatchers> | undefined;
    onBeforeChange?: ((matches: boolean) => void) | undefined;
    onChange?: ((matches: boolean) => void) | undefined;
}

declare class MediaQuery extends React.Component<MediaQueryProps> {}
export function toQuery(matchers: Partial<MediaQueryAllQueryable>): string;

export const Context: React.Context<Partial<MediaQueryAllQueryable>>;

export function useMediaQuery(
    settings: Partial<MediaQueryAllQueryable & { query?: string | undefined }>,
    device?: MediaQueryMatchers,
    callback?: (matches: boolean) => void,
): boolean;

export default MediaQuery;
