import type { IncomingMessage } from "node:http";
import realip = require("req-real-ip");

const req = {} as IncomingMessage;
realip.detect({ req, config: { cloudflare: true } }); // $ExpectType string | null
