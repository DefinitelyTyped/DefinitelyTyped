import {
    SecretsManagerRotationEvent,
    SecretsManagerRotationEventStep,
    SecretsManagerRotationHandler,
} from "aws-lambda";

const createSecretEvent: SecretsManagerRotationEvent = {
    Step: "createSecret",
    SecretId: "NhcZoZ7TOTaq5OGrekc",
    ClientRequestToken: "51f72378-6a5d-5dc7-8fd8-29e4319f482a",
};

const setSecretEvent: SecretsManagerRotationEvent = {
    Step: "setSecret",
    SecretId: "NhcZoZ7TOTaq5OGrekc",
    ClientRequestToken: "51f72378-6a5d-5dc7-8fd8-29e4319f482a",
};

const testSecretEvent: SecretsManagerRotationEvent = {
    Step: "testSecret",
    SecretId: "NhcZoZ7TOTaq5OGrekc",
    ClientRequestToken: "51f72378-6a5d-5dc7-8fd8-29e4319f482a",
};

const finishSecretEvent: SecretsManagerRotationEvent = {
    Step: "finishSecret",
    SecretId: "NhcZoZ7TOTaq5OGrekc",
    ClientRequestToken: "51f72378-6a5d-5dc7-8fd8-29e4319f482a",
};

const handler: SecretsManagerRotationHandler = async (event, context, callback) => {
    const step: SecretsManagerRotationEventStep = event.Step;
    const secretId: string = event.SecretId;
    const clientRequestToken: string = event.ClientRequestToken;
    callback();
    callback(new Error());
};
