import * as R from 'ramda';

(() => {
  function Circle(r: number, colors: string) {
    this.r = r;
    this.colors = colors;
  }

  Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.r, 2);
  };

  const circleN = R.constructN(1, Circle);
  circleN(10, 'red');
  circleN(10);
})();
