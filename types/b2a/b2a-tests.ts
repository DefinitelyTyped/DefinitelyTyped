import { btoa, atob } from "b2a";

const b64 = btoa ("foo");
const text = atob (b64);
