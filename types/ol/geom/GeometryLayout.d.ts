/**
 * The coordinate layout for geometries, indicating whether a 3rd or 4th z ('Z')
 * or measure ('M') coordinate is available. Supported values are 'XY',
 * 'XYZ', 'XYM', 'XYZM'.
 */
declare enum GeometryLayout {
    XY = 'XY',
    XYZ = 'XYZ',
    XYM = 'XYM',
    XYZM = 'XYZM',
}

export default GeometryLayout;
