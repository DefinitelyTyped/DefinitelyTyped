import omelette, { Callback } from "omelette";

// Prepare environment value

declare var process: any;
declare var console: any;
declare var fs: any;
declare var require: any;
declare var getFromRemote: any;
declare var fetch: any;

// END

// ------------------------------ //
// INLINE INITIAL OMELETTE OBJECT //
// ------------------------------ //

// simple initial omelette object: with array choices
omelette`github ${["pull", "push"]} ${["origin", "upstream"]} ${["master", "develop"]}`.init();

const firstArgument: Callback = ({ reply }) => {
  reply(["beautiful", "cruel", "far"]);
};

const planet: Callback = ({ reply }) => {
  reply(["world", "mars", "pluto"]);
};

// simple initial omelette object: with function callback
omelette`hello|hi ${firstArgument} ${planet}`.init();

// ------------------------------ //
// SIMPLE EVENT BASED APIS        //
// ------------------------------ //

// Write your CLI template.
const completion = omelette(`githubber|gh <action> <user> <repo>`);

// Bind events for every template part.
completion.on("action", ({ reply }) => {
  reply(["clone", "update", "push"]);
});

completion.on("user", ({ reply }) => {
  reply(fs.readdirSync("/Users/"));
});

completion.on("repo", ({ before, reply }) => {
  reply([`https://github.com/${before}/helloworld`, `https://github.com/${before}/blabla`]);
});

completion.on('complete', (fragment, { reply }) => reply(["hello", "world"]));

// Initialize the omelette.
completion.init();

// If you want to have a setup feature, you can use `omeletteInstance.setupShellInitFile()` function.
if (~process.argv.indexOf("--setup")) {
  completion.setupShellInitFile();

  completion.setupShellInitFile("~/custom/.bashrc"); // OR
}

// Similarly, if you want to tear down autocompletion, use `omeletteInstance.cleanupShellInitFile()`
if (~process.argv.indexOf("--cleanup")) {
  completion.cleanupShellInitFile();
}

// Rest is yours
console.log("Your program's default workflow.");
console.log(process.argv);

// ------------------------------ //
// TEMPLATE LITERAL API FOR ES6   //
// ------------------------------ //

// Just pass a template literal to use super easy API.
omelette`hello ${["cruel", "nice"]} ${["world", "mars"]}`.init();

// Write your CLI template.
omelette`
  githubber|gh
  ${["clone", "update", "push"]}
  ${() => fs.readdirSync("/Users/")}
  ${({ before }) => [`https://github.com/${before}/helloworld`, `https://github.com/${before}/blabla`]}
`.init();

// ------------------------------ //
// ADVANCED TEMPLATE LITERAL      //
// ------------------------------ //

omelette`
  githubber|gh
      ${["pull", "push", "star"] /* Direct command list */}
      ${getFromRemote("http://api.example.com/commands") /* Remote call at the beginning */}
      ${({ reply }) => fetch("http://api.example.com/lazy-commands").then(reply) /* Fetch when argument <tab>bed */}
      ${() => fs.readdirSync("/Users/") /* Access filesystem via Node */}
      ${({ before }) => [
        /* Use parameters like `before`, `line`, `fragment` or `reply` */
        `${before}/helloworld`,
        `${before}/blabla`,
      ]}
  `.init();

// No extra configuration required.

console.log("Your program's default workflow.");
console.log(process.argv);

// ------------------------------ //
// ASYNC APIS                     //
// ------------------------------ //

completion.onAsync("user", async ({ reply }) => {
  reply(
    new Promise(resolve => {
      fs.readdir("/Users/", (err: any, users: any) => {
        resolve(users);
      });
    }),
  );
});

// Instead of running directly, you need to set an handler to run your main workflow.
completion.next(() => {
  console.log("Your program's default workflow.");
  console.log(process.argv);
});

// .init must be called after defining .next
completion.init();

omelette("hello")
  .tree({
    cruel: ["world", "moon"],
    beautiful: ["mars", "pluto"],
  })
  .init();
