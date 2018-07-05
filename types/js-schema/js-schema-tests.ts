import * as schema from 'js-schema';

var Duck = schema({              // A duck
    swim : Function,               //  - can swim
    quack : Function,              //  - can quack
    age : Number.min(0).max(5),    //  - is 0 to 5 years old
    color : ['yellow', 'brown']    //  - has either yellow or brown color
});

// Some animals
var myDuck = { swim : function() {}, quack : function() {}, age : 2, color : 'yellow' },
    myCat =  { walk : function() {}, purr  : function() {}, age : 3, color : 'black'  },
    animals = [ myDuck, myCat, {}, /*...*/ ];

// Simple checks
console.log( Duck(myDuck) ); // true
console.log( Duck(myCat)  ); // false
