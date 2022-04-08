import { Server } from "@hapi/hapi";

new Server().control(new Server());
