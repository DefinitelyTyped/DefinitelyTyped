import Refs = require('object-refs');

let refs = new Refs({ name: 'wheels', collection: true, enumerable: true }, { name: 'car' });

let car: any = { name: 'toyota' };
let wheels: any = [{ pos: 'front-left' }, { pos: 'front-right' }];

refs.bind(car, 'wheels');

car.wheels; //[]
car.wheels.add(wheels[0]);
car.wheels.add(wheels[1]);
car.wheels; // [{ pos: 'front-left' }, { pos: 'front-right' }]

wheels[0].car // { name: 'toyota' };
car.wheels.remove(wheels[0]);
wheels[0].car // undefined
