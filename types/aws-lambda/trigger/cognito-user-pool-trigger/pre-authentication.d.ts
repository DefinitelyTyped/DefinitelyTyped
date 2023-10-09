import { Handler } from "../../handler";
import { BaseTriggerEvent, StringMap } from "./_common";

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-authentication.html
 */
export interface PreAuthenticationTriggerEvent extends BaseTriggerEvent<"PreAuthentication_Authentication"> {
    request: {
        userAttributes: StringMap;
        userNotFound?: boolean | undefined;
        validationData?: StringMap | undefined;
        clientMetadata?: StringMap | undefined;
    };
}

export type PreAuthenticationTriggerHandler = Handler<PreAuthenticationTriggerEvent>;
