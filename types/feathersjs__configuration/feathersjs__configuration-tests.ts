import feathersConfiguration from "@feathersjs/configuration";
import feathers, { Application } from "@feathersjs/feathers";

const app: Application = feathers().configure(feathersConfiguration());
