import type { IncomingMessage } from "node:http";
import realip from "req-real-ip";

const req = {} as IncomingMessage;
realip.detect({ req, config: { cloudflare: true } }); // $ExpectType string | null
