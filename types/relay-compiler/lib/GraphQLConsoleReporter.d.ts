import { GraphQLReporter } from './GraphQLReporter';
export default class GraphQLMultiReporter implements GraphQLReporter {
  reportMessage(message: string): void;
  reportTime(name: string, ms: number): void;
  reportError(caughtLocation: string, error: Error): void;
}
