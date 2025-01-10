/**
 * @param baseUrl Base url of the WMS server
 * @param layer Layer name
 * @param x Tile coordinate x
 * @param y Tile coordinate y
 * @param z Tile zoom
 * @param [options]
 * @param [options.format='image/png']
 * @param [options.service='WMS']
 * @param [options.version='1.1.1']
 * @param [options.request='GetMap']
 * @param [options.srs='EPSG:3857']
 * @param [options.width=256]
 * @param [options.height=256]
 * @returns url
 * @example
 * var baseUrl = 'http://geodata.state.nj.us/imagerywms/Natural2015';
 * var layer = 'Natural2015';
 * var url = whoots.getURL(baseUrl, layer, 154308, 197167, 19);
 */
export function getURL(
    baseUrl: string,
    layer: string,
    x: number,
    y: number,
    z: number,
    options?: Readonly<{
        format?: string;
        service?: string;
        version?: string;
        request?: string;
        srs?: string;
        width?: number;
        height?: number;
    }>,
): string;

/**
 * @param x Tile coordinate x
 * @param y Tile coordinate y
 * @param z Tile zoom
 * @returns String of the bounding box
 */
export function getTileBBox(x: number, y: number, z: number): string;

/**
 * @param x Pixel coordinate x
 * @param y Pixel coordinate y
 * @param z Tile zoom
 */
export function getMercCoords(x: number, y: number, z: number): [number, number];
