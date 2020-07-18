import express = require('express');
import basicAuth = require('basicauth-middleware');

const app = express();

app.use(basicAuth("username", "password", "realm"));
app.use(basicAuth([["username", "password"]]));

function checkSync(username: string, password: string): boolean {
  return username === "user" && password === "pass";
}
function checkCallback(username: string, password: string, callback: (err: Error|null, authorized: boolean) => void): void {
  callback(null, username === "user" && password === "pass");
}
function checkPromise(username: string, password: string): Promise<boolean> {
  return Promise.resolve(true);
}

app.use(basicAuth(checkSync));
app.use(basicAuth(checkCallback));
app.use(basicAuth(checkPromise));
