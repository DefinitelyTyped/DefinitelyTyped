import appdmg = require("appdmg");
import { Options, Specification, SpecificationOptions } from "appdmg";

const proc = appdmg({
  target: "/foo/bar.dmg",
  basepath: "/baz",
  specification: {
    title: "Happy",
    icon: "happy.icns",
    background: "happy.tiff",
    format: "UDBZ",
    "icon-size": 98,
    contents: [
      {
        x: 405,
        y: 150,
        type: "link",
        path: "/Applications"
      },
      {
        x: 127,
        y: 150,
        type: "file",
        path: "/foo/bar.app"
      }
    ]
  }
});

proc.on("progress", info => {
  if (info.type === "step-begin") {
    process.stdout.write(`${info.title}... `);
  }

  if (info.type === "step-end") {
    process.stdout.write(`${info.status}\n`);
  }
});

proc.on("finish", () => {
  console.log('Installer was created successfully!');
});

proc.on("error", (err) => {
  console.error('Installer could not be created', err);
  process.exit(1);
});
