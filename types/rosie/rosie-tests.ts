let resultObj: any;
let resultFactory: rosie.IFactory;

declare var Factory:rosie.IFactoryStatic;

resultFactory = Factory.define('person').attr('name', 'John').sequence('id');
resultObj = Factory.build('person');
if (resultObj.name !== 'John') { throw new Error('incorrect build'); };

/// resultObj, as any, will allow this
resultObj.name = 1;

resultFactory = Factory.define('some').sequence('id').attr('name', ['id'], (id: number) => { return 'Name ' + id.toString() });
resultObj = Factory.build('some');

Factory.define('coach')
  .option('buildPlayer', false)
  .sequence('id')
  .attr('players', ['id', 'buildPlayer'], function(id: any, buildPlayer: boolean) {
    if (buildPlayer) {
      return [Factory.build('player', {coach_id: id})];
    }
  })
  .after(function(coach: any, options: any) {
    if (options.buildPlayer) {
      console.log('built player:', coach.players[0]);
    }
  });

Factory.build('coach', {}, {buildPlayer: true});

interface Person {
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  secretNumber: number;
  secretCode: { name: string; value: number };
  id: number;
}

const personFactory = Factory.define<Person>('Person').attr('firstName', 'John').sequence('id');
personFactory.attr('fullName', ['firstName'], firstName => firstName);
personFactory.attr('fullName', ['firstName', 'lastName'], (firstName, lastName) => lastName);
personFactory.attr('secretNumber', ['firstName', 'lastName', 'age'], (firstName, lastName, age) => age + 1);
personFactory.attr('secretCode', ['firstName', 'lastName', 'age', 'age'], (firstName, lastName, age1, age2) => ({ name: `${firstName} + ${lastName}`, value: age1 + age2 }));
personFactory.attr('secretCode', ['firstName', 'lastName', 'age', 'age', 'firstName'], (firstName, lastName, age1, age2, firstNameAgain) => ({ name: firstNameAgain, value: age1 + age2 }));

const personObj = Factory.build<Person>('Person');
if (personObj.firstName !== 'John') { throw new Error('incorrect Person build'); }

import rosie = require('rosie');

var Factory = rosie.Factory;
