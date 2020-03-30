import convert = require('convert-units');

const convertedMass = convert(25).from('mcg').to('t');
const convertedMassBack =  convert(convertedMass).from('t').to('mcg');

const unit = convert(66).getUnit<'mcg'>('mcg');
