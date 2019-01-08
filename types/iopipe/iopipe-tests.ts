import iopipe, { mark, label, metric } from "@iopipe/iopipe";

const configured = iopipe({
  token: "ABCDEFG"
});

const handler = () => {};

configured(handler);

mark.start("api-call");
mark.end("api-call");

label("here is a label");

metric("magic number", 42);
