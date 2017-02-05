var obj = {
  'first_name': 'John',
  'last_name': 'Doe'
};

dot.move('first_name', 'contact.firstname', obj);
dot.move('last_name', 'contact.lastname', obj);

var src = {
  name: 'John',
  stuff: {
    phone: {
      brand: 'iphone',
      version: 6
    }
  }
};

var tgt = { name: 'Brandon' };

dot.copy('stuff.phone', 'wanna.haves.phone', src, tgt, [(arg: any) => {
  return arg;
}]);

dot.transfer('stuff.phone', 'wanna.haves.phone', src, tgt);

var row = {
  'id': 2,
  'contact.name.first': 'John',
  'contact.name.last': 'Doe',
  'contact.email': 'example@gmail.com',
  'contact.info.about.me': 'classified',
  'devices[0]': 'mobile',
  'devices[1]': 'laptop',
  'some.other.things.0': 'this',
  'some.other.things.1': 'that'
};

dot.object(row, (arg: any) => {
  return arg;
});

dot.str('this.is.my.string', 'value', tgt);

var newObj = {
  some: {
    nested: {
      value: 'Hi there!'
    }
  }
};

var val = dot.pick('some.nested.value', newObj);
console.log(val);

// Pick & Remove the value
val = dot.pick('some.nested.value', newObj, true);

// shorthand
val = dot.remove('some.nested.value', newObj);

// or use the alias `del`
val = dot.del('some.nested.value', newObj);

// convert object to dot object
var result = {};
dot.dot({ test: 'something' }, result);
result = dot.dot({ test: 'something' });

var dotWithArrow = new dot('=>');
