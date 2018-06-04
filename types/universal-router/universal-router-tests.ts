import { ActionContext, Params, resolve } from "universal-router";

// Test 1
const routes1 = [
  {
    path: "/one",
    action: () => "Page One"
  },
  {
    path: "/two",
    action: () => "Page Two"
  }
];

resolve(routes1, { path: "/one" })
  .then(result => console.log(result));

// Test 2
const routes2 = [
  {
    path: "/hello/:username",
    action: (context: ActionContext) => `Welcome, ${context.params["username"]}!`
  }
];

resolve(routes2, { path: "/hello/john" })
  .then(result => console.log(result));

// Test 3
const routes3 = [
  {
    path: "/hello/:username",
    action: (ctx: ActionContext, { username }: Params) => `Welcome, ${username}!`
  }
];

resolve(routes3, { path: "/hello/john" })
  .then(result => console.log(result));

// Test 4
const routes4 = [
  {
    path: "/hello",
    action: () => new Promise(resolve => {
      setTimeout(() => resolve("Welcome!"), 1000);
    })
  }
];

resolve(routes4, { path: "/hello" })
  .then(result => console.log(result));

// Test 5
const routes5 = [
  {
    path: "/hello/:username",
    async action(ctx: ActionContext, { username }: Params) {
      const waitable = async (name: string) => {
        console.log(`Welcome ${name}`);
      };
      await waitable(username);
    }
  }
];

resolve(routes5, { path: "/hello/john" })
  .then(result => console.log(result));

// Test 6
const routes6 = [
  { path: "/one", action: () => "<h1>Page One</h1>" },
  { path: "/two", action: () => "<h1>Page Two</h1>" }
];

resolve(routes6, { path: "/one" }).then(result => {
  document.body.innerHTML = result || "<h1>Not Found</h1>";
});

// Test 7
interface Render {
  render: typeof render;
}

const routes7 = [
  { path: "/one", action: ({ render: func }: ActionContext & Render) => func("<h1>Page One</h1>") },
  { path: "/two", action: ({ render: func }: ActionContext & Render) => func("<h1>Page Two</h1>") }
];

function render(component: string) {
  return new Promise(resolve => {
    console.log(`Rendering... ${component}`);
  });
}

resolve<Render, Promise<{}>>(routes7, { path: "/one", render });
