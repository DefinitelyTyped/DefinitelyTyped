import feathersAuthenticationLocal from "@feathersjs/authentication-local";
import feathers, { Application } from "@feathersjs/feathers";

const app: Application = feathers().configure(feathersAuthenticationLocal());
