import { Entity, IncomingContext } from "@xmpp/middleware";
import Koa = require("koa");

export = route;

declare function route(): (context: IncomingContext<Entity>, next: Koa.Next) => Promise<any>;
