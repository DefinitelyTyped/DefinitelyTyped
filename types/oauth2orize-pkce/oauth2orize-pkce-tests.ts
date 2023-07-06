import * as pkce from 'oauth2orize-pkce';
import { MiddlewareFunction } from 'oauth2orize';

const middleware: MiddlewareFunction = pkce.extensions();
