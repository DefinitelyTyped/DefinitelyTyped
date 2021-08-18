import { meanSeaLevel, ellipsoidToEgm96, egm96ToEllipsoid } from 'egm96-universal';

// $ExpectType number
meanSeaLevel(1, 2);

// $ExpectType number
ellipsoidToEgm96(1, 2, 100);

// $ExpectType number
egm96ToEllipsoid(1, 2, 100);
