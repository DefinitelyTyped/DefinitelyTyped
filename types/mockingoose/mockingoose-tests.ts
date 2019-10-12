import mockingoose from 'mockingoose';

mockingoose.User
  .toReturn({ name: 'name' })
  .toReturn({ name: 'a name too' }, 'findOne')
  .toReturn({ name: 'another name' }, 'save')
  .reset('find');

mockingoose.resetAll();
