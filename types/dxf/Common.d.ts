export interface Point2D {
  x: number;
  y: number;
}

export interface Point3D extends Point2D {
  z: number;
}

export type ColorNumber = [number, number, number];
export type ColorNumbers = ColorNumber[];

export type UnitTypes = {
  0: "Unitless",
  1: "Inches",
  2: "Feet",
  3: "Miles",
  4: "Millimeters",
  5: "Centimeters",
  6: "Meters",
  7: "Kilometers",
  8: "Microinches",
  9: "Mils",
  10: 'Yards',
  11: 'Angstroms',
  12: 'Nanometers',
  13: "Microns",
  14: 'Decimeters',
  15: 'Decameters',
  16: 'Hectometers',
  17: 'Gigameters',
  18: 'Astronomical Units',
  19: 'Light years',
  20: 'Parsecs'
};
