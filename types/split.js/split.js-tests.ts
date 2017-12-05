import Split = require('split.js');

const split = Split(['#one', '#two'], {
  sizes: [25, 75],
  gutter(index: number, direction: 'horizontal' | 'vertical'): HTMLElement {
    const gutter = document.createElement('div');
    gutter.className = `gutter gutter-${direction}`;
    return gutter;
  },
  onDragEnd(): void {
    console.log(split.getSizes());
  }
});

split.destroy();
