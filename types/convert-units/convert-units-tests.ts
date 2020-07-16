import convert = require('convert-units');

const convertedMass = convert(25).from('mcg').to('t');
const convertedMassBack = convert(convertedMass).from('t').to('mcg');

const unit = convert(66).getUnit<'mcg'>('mcg');

// Using `convert` without a value.
const measures = convert().measures();
const allUnits = convert().possibilities();
const massUnits = convert().possibilities('mass');
const distanceUnits = convert().from('m').possibilities();
const kgDescription = convert().describe('kg');
const lengthUnitDescriptions = convert().list('length');

const kgAbbr: string = kgDescription.abbr;
const kgMeasure: string = kgDescription.measure;
const kgSystem: string = kgDescription.system;
const kgSingular: string = kgDescription.singular;
const kgPlural: string = kgDescription.plural;
