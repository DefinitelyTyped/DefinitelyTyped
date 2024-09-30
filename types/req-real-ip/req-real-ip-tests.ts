import realip from "req-real-ip";
import type { IncomingMessage } from "node:http";

const req = {} as IncomingMessage;
realip.detect({ req, config: { cloudflare: true } }); // $ExpectType string | null
