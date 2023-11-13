import { EtherPortClient } from "etherport-client";

const port = new EtherPortClient({ host: "", port: 0 });
const portWithTimeout = new EtherPortClient({ host: "", port: 0, reconnectTimeout: 20 });
