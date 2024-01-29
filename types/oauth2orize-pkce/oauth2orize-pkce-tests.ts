import { MiddlewareFunction } from "oauth2orize";
import * as pkce from "oauth2orize-pkce";

const middleware: MiddlewareFunction = pkce.extensions();
