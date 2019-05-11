import { btoa, atob } from "b2a";

let b64 = btoa ("foo");
let text = atob (b64);