import feathersAuthentication from "@feathersjs/authentication";
import feathers from "@feathersjs/feathers";

feathers().configure(feathersAuthentication({}));
