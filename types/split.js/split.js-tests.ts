
let split = Split(['#one', '#two'], {
  sizes: [25, 75],
  gutter: (index, direction) => {
    const gutter = document.createElement('div');
    gutter.className = `gutter gutter-${direction}`;
    return gutter;
  },
  onDragEnd: () => {
    console.log(split.getSizes());
  }
});

split.destroy();
