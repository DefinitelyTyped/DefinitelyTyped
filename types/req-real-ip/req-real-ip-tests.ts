import realip = require("req-real-ip");

const req = {} as realip.Request;
realip.detect({ req, config: { cloudflare: true } }); // $ExpectType string | null
