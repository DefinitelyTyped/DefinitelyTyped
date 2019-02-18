import monomeGrid from "monome-grid";

async function run() {
  await monomeGrid('m1000011');

  const grid = await monomeGrid();

  function keyHandler(x: number, y: number, s: number) {
    return `key: ${x}, ${y}, ${s}`;
  }
  grid.key(keyHandler);

  const led: number[][] = [[0, 0, 0], [0, 0, 0]];
  grid.refresh(led);
}
