// Type definitions for colormap 2.3
// Project: https://github.com/bpostlethwaite/colormap#readme
// Definitions by: Will Worrall <https://github.com/wworrall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Colormap;

declare function Colormap<U extends Colormap.Spec | undefined>(
    spec?: U,
): U extends { format?: 'hex' | 'rgbaString' } | undefined
    ? string[]
    : U extends { format: 'rba' | 'float' }
    ? [number, number, number, number]
    : never;

declare namespace Colormap {
    interface Spec {
        colormap?: ColormapName;
        nshades?: number;
        format?: ColormapFormat;
        alpha?: number | [number, number];
    }

    type ColormapFormat = 'hex' | 'rgbaString' | 'rba' | 'float';

    type ColormapName =
        | 'jet'
        | 'hsv'
        | 'hot'
        | 'cool'
        | 'spring'
        | 'summer'
        | 'autumn'
        | 'winter'
        | 'bone'
        | 'copper'
        | 'greys'
        | 'YlGnBu'
        | 'greens'
        | 'YlOrRd'
        | 'bluered'
        | 'RdBu'
        | 'picnic'
        | 'rainbow'
        | 'portland'
        | 'blackbody'
        | 'earth'
        | 'electric'
        | 'viridis'
        | 'inferno'
        | 'magma'
        | 'plasma'
        | 'warm'
        | 'cool'
        | 'rainbow-soft'
        | 'bathymetry'
        | 'cdom'
        | 'chlorophyll'
        | 'density'
        | 'freesurface-blue'
        | 'freesurface-red'
        | 'oxygen'
        | 'par'
        | 'phase'
        | 'salinity'
        | 'temperature'
        | 'turbidity'
        | 'velocity-blue'
        | 'velocity-green'
        | 'cubehelix'
        | 'jet with transparency'
        | 'hsv with transparency'
        | 'hot with transparency'
        | 'cool with transparency'
        | 'spring with transparency'
        | 'summer with transparency';

    type Colors = string[] | [number, number, number, number];
}
