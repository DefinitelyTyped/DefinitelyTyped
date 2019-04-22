import * as cassandra from 'cassandra-driver';
import * as util from 'util';
import * as fs from 'fs';

class CustomRequestLogger implements cassandra.metrics.ClientMetrics {
  onAuthenticationError(e: Error | cassandra.errors.AuthenticationError): void {
    throw new Error("Method not implemented.");
  }
  onClientTimeoutError(e: cassandra.errors.OperationTimedOutError): void {
    throw new Error("Method not implemented.");
  }
  onClientTimeoutRetry(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onConnectionError(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onIgnoreError(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onOtherError(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onOtherErrorRetry(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onReadTimeoutError(e: cassandra.errors.ResponseError): void {
    throw new Error("Method not implemented.");
  }
  onReadTimeoutRetry(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onResponse(latency: number[]): void {
    throw new Error("Method not implemented.");
  }
  onSpeculativeExecution(): void {
    throw new Error("Method not implemented.");
  }
  onSuccessfulResponse(latency: number[]): void {
    throw new Error("Method not implemented.");
  }
  onUnavailableError(e: cassandra.errors.ResponseError): void {
    throw new Error("Method not implemented.");
  }
  onUnavailableRetry(e: Error): void {
    throw new Error("Method not implemented.");
  }
  onWriteTimeoutError(e: cassandra.errors.ResponseError): void {
    throw new Error("Method not implemented.");
  }
  onWriteTimeoutRetry(e: Error): void {
    throw new Error("Method not implemented.");
  }
}

const client = new cassandra.Client({
    contactPoints: ['h1', 'h2'],
    localDataCenter: 'datacenter1',
    keyspace: 'ks1',
    sslOptions: {
        cert: fs.readFileSync('certFilePath')
    },
    encoding: {
        map: Map,
        set: Set,
        useBigIntAsLong: false,
        useBigIntAsVarint: true
    },
    requestTracker: new cassandra.tracker.RequestLogger({ logNormalRequests: true }),
    metrics: new CustomRequestLogger()
});

console.log(client.metrics);

const query = 'SELECT email, last_name FROM user_profiles WHERE key=?';
client.execute(query, ['guy'], (err, result) => {
  console.log('got user profile with email ' + result.rows[0].email);
});

client.execute(query, [ 'guy' ], { prepare: true, counter: false }).then(
    (result) => console.log(result.first().email),
    (error) => console.log(error)
);

const mapper = new cassandra.mapping.Mapper(
  client,
  {
    models: {
      // example copied from library examples
      // tslint:disable-next-line:object-literal-key-quotes
      'Video': {
        tables: [ 'videos', 'user_videos', 'latest_videos' ],
        keyspace: 'examples',
        // example copied from library examples
        // tslint:disable-next-line:object-literal-key-quotes
        columns: { 'videoid': 'videoId', 'userid': 'userId' },
        mappings: new cassandra.mapping.UnderscoreCqlToCamelCaseMappings()
      }
    }
  });

const videoMapper = mapper.forModel('Video');
videoMapper.insert({ videoId: 'uuid', addedDate: new Date(), userId: 'uuid', name: 'My video', description: 'My desc' });
videoMapper.find({ videoId: 'uuid' }).then(results => results.first());

console.log(cassandra.version);

const metadata = new cassandra.metadata.Metadata(cassandra.defaultOptions(), undefined);
let refreshFinished: Promise<void> = metadata.refreshKeyspaces();
refreshFinished = metadata.refreshKeyspaces(true);
metadata.refreshKeyspaces(() => {});
metadata.refreshKeyspaces(true, () => {});

const start: cassandra.token.Token = new cassandra.token.Token("x");
const end: cassandra.token.Token = new cassandra.token.Token("z");

const tokenizer: cassandra.token.Tokenizer = {
  hash: (value: Buffer | number[]) => new cassandra.token.Token("x"),
  parse: (value: string) => new cassandra.token.Token("x"),
  minToken: () => new cassandra.token.Token("x"),
  split: (start: cassandra.token.Token, end: cassandra.token.Token, numberOfSplits: number) => [],
  splitBase: (start: number, end: number, ringEnd: number, ringLength: number, numberOfSplits: number): number[] => [1],
  stringify: (token: cassandra.token.Token): string => "asd"
};

const range: cassandra.token.TokenRange = new cassandra.token.TokenRange(start, end, tokenizer);

class MyLoadBalancingPolicy extends cassandra.policies.loadBalancing.LoadBalancingPolicy {
  getDistance() {
    return cassandra.types.distance.ignored;
  }
}

const myPolicy: cassandra.policies.loadBalancing.LoadBalancingPolicy = new MyLoadBalancingPolicy();
let existingPolicy: cassandra.policies.loadBalancing.LoadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy();
existingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy("dc");
