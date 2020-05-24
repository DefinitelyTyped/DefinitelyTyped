// Type definitions for aws-elasticsearch-connector 8.2
// Project: https://github.com/compwright/aws-elasticsearch-connector#readme
// Definitions by: Paul Draper <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Connection, Transport } from '@elastic/elasticsearch';

class AmazonConnection extends Connection {}
class AmazonTransport extends Transport {}

export const AmazonConnection: AmazonConnection;
export const AmazonTransport: AmazonTransport;
