import feathersAuthenticationOAuth1 from "@feathersjs/authentication-oauth1";
import feathers, { Application } from "@feathersjs/feathers";

const app: Application = feathers().configure(feathersAuthenticationOAuth1());
