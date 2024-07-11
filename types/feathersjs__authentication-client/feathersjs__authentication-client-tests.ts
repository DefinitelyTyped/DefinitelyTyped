import feathersAuthClient, { defaults } from "@feathersjs/authentication-client";
import feathers from "@feathersjs/feathers";

const app = feathers();
// check that the default options are valid when configuring the client
app.configure(feathersAuthClient(defaults));
app.authenticate({ strategy: "abcdef" }).then(() => {});
app.logout().then(() => {});

// check if the non-augmented @feathersjs/feathers typings still work
app.on("asd", () => {});
app.service("asd").get(0).then(() => {});
