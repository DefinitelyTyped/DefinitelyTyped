import { Application } from "@feathersjs/feathers";

export default function feathersConfiguration(): <T>(app: Application<T>) => Application<T>;
