import { parseInputChange, formatTimeForDisplay } from 'simple-time-input-engine';

const { valid, time } = parseInputChange({ newValue: '6am', previousTime: '10:00', clockMode: 12 });

console.log(valid); // true
console.log(time); // "06:00"

console.log(formatTimeForDisplay({ time: '', clockMode: 12 })); // ""
console.log(formatTimeForDisplay({ time: '05:00', clockMode: 12 })); // "5:00am"
console.log(formatTimeForDisplay({ time: '17:00', clockMode: 12 })); // "5:00pm"
console.log(formatTimeForDisplay({ time: '05:00', clockMode: 24 })); // "05:00"
console.log(formatTimeForDisplay({ time: '17:00', clockMode: 24 })); // "17:00"
