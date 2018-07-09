/// <reference types="node" />

import * as yargsInteractive from "yargs-interactive";

const options: yargsInteractive.Option = {
  color: {
    describe: "What is your favorite color?",
    prompt: "always",
    type: "input",
    default: "Blue",
  }
};

yargsInteractive()
  .usage("$0 <command> [args]")
  .interactive(options)
  .then((result: any) => {
    console.log(result);
  });
