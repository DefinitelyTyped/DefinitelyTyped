import { Connection, Transport } from '@elastic/elasticsearch';
import { AmazonConnection, AmazonTransport } from 'aws-elasticsearch-connector';

AmazonConnection; // $ExpectType Connection
AmazonTransport; // $ExpectType Transport
