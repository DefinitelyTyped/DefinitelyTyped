import { AsyncHandler, Handler } from "../handler";

/**
 * {@link SecretsManagerRotationAsyncHandler} Is the new version of this
 * @deprecated No longer available as of Node.js 24 Runtime {@link https://aws.amazon.com/blogs/compute/node-js-24-runtime-now-available-in-aws-lambda/}
 */
export type SecretsManagerRotationHandler = Handler<SecretsManagerRotationEvent, void>;
export type SecretsManagerRotationAsyncHandler = AsyncHandler<SecretsManagerRotationEvent, void>;

export type SecretsManagerRotationEventStep = "createSecret" | "setSecret" | "testSecret" | "finishSecret";

/**
 * Secrets Manager Rotation event
 * https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets-lambda-function-overview.html
 */
export interface SecretsManagerRotationEvent {
    Step: SecretsManagerRotationEventStep;
    SecretId: string;
    ClientRequestToken: string;
}
