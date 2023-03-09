type Unit = 'deg' | 'rad' | 'grad' | 'turn';

declare function hueToDeg(val: number, unit: Unit): number;

export default hueToDeg;
