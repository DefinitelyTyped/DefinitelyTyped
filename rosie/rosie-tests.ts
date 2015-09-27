///<reference path="./rosie.d.ts" />

let resultObj: Object;
let resultFactory: rosie.IFactory;

declare var Factory:rosie.IFactoryStatic;

resultFactory = Factory.define('person').attr('name', 'John').sequence('id');
resultObj = Factory.build('person');

resultFactory = Factory.define('some').sequence('id').attr('name', ['id'], (id: number) => { return 'Name ' + id.toString() });
resultObj = Factory.build('some');



var rosieFactory = require('rosie').Factory;
