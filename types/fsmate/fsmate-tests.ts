import fsMate = require("fsmate");

async function run() {
  const file = "demo.txt";

  await fsMate.mkfile(file, true);
  await fsMate.writeFile(file, "hello world");

  const content = await fsMate.readFile(file);
  console.log("content", content);

  await fsMate.appendFile(file, "\nextra");
  const lines = await fsMate.readLine(file, 0, true);
  console.log("lines", lines);

  const size = await fsMate.filesize(file);
  console.log("size", size);

  await fsMate.remove(file);
}
