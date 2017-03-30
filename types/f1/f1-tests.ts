import F1 = require("f1");
const ui = F1();

ui.states({
    out: {
        itemToAnimate1: {
            variableToAnimate: 0
        },

        itemToAnimate2: {
            variableToAnimate: 0
        }
    },

    idle: {
        itemToAnimate1: {
            variableToAnimate: 1
        },

        itemToAnimate2: {
            variableToAnimate: 2
        }
    }
});

ui.transitions( [
  { from: 'idle', to: 'rollOver', animation: { duration: 0.25 } },
  { from: 'rollOver', to: 'idle', animation: { duration: 0.1 } }
]);
