import feathersAuthenticationJwt from "@feathersjs/authentication-jwt";
import feathers, { Application } from "@feathersjs/feathers";

const app: Application = feathers().configure(feathersAuthenticationJwt());
