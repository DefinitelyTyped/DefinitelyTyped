import * as JsonRpcError from "json-rpc-error";

new JsonRpcError("err", 42);
new JsonRpcError.InternalError("error");
new JsonRpcError.ServerError(42);
new JsonRpcError.MethodNotFound();
new JsonRpcError.InvalidParams();
new JsonRpcError.InvalidRequest();
new JsonRpcError.ParseError();
