import { init, ripple, attach, calm } from "node-waves";

init({ delay: 300 });

attach("button", "waves-light");

ripple(".box", { wait: null });

calm(".box");
