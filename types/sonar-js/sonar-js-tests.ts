import Sonar = require('sonar-js');

const sonar = new Sonar(window);

const withinRangeOfPageBottom = () => {
    document.querySelector('.popover')!.classList.remove('hidden');
};

const notWithinRangeOfPageBottom = () => {
    document.querySelector('.popover')!.classList.add('hidden');
};

sonar.ping(600, withinRangeOfPageBottom, notWithinRangeOfPageBottom);
