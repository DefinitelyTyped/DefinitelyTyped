import { Handler } from "../handler";

export type SecretsManagerRotationHandler = Handler<SecretsManagerRotationEvent, void>;

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
