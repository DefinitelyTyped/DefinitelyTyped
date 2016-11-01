
import huject = require("huject");

let container = new huject.Container();

container.setAllowUnregisteredResolving(true);

container.register(() => {
    console.log('Huject container register!');
});

container.register(() => {
    console.log('Huject container register!');
}, {});

container.registerCallable(() => {
  console.log('Huject container registerCallable!');
}, () => 'Hi, huject!')

container.resolve(() => {
  console.log('Huject contsiner resolve!');
});

container.resolve('Huject contsiner resolve!');
