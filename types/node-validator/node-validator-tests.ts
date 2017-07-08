import { run, isObject, isString, isIsoDate, isArray } from 'node-validator';

let checkChild = isObject()
  .withRequired('prop', isString({ regex: /^[abc]+$/ }));

let check = isObject()
  .withRequired('_id', isString({ regex: /^[abc]+$/ }))
  .withOptional('date', isIsoDate())
  .withOptional('children', isArray(checkChild, {min: 1}));

let toValidate = {
  _id: 'abababa',
  date: '2013-10-24',
  children: [{
    prop: 'zxzx'
  }]
};

run(check, toValidate, function(errorCount, errors) {

});
