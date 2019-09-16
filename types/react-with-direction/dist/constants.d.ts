declare const CHANNEL: '__direction__';

declare const DIRECTIONS: {
  LTR: 'ltr';
  RTL: 'rtl';
};

type Direction = typeof DIRECTIONS.LTR | typeof DIRECTIONS.RTL;

export { CHANNEL, DIRECTIONS, Direction };
