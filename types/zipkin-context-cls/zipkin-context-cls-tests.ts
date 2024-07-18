import CLSContext = require("zipkin-context-cls");

const ctxImpl = new CLSContext();
const ctxImplName = new CLSContext("zipkin");
const ctxImplNameAsyncAwait = new CLSContext("zipkin", true);
