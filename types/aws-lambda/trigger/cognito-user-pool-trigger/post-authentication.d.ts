import { Handler } from "../../handler";
import { BaseTriggerEvent, StringMap } from "./_common";

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-authentication.html
 */
export interface PostAuthenticationTriggerEvent extends BaseTriggerEvent<"PostAuthentication_Authentication"> {
    request: {
        userAttributes: StringMap;
        newDeviceUsed: boolean;
        clientMetadata?: StringMap | undefined;
    };
}

export type PostAuthenticationTriggerHandler = Handler<PostAuthenticationTriggerEvent>;
