import { ISocial } from "./types";
export { IMySocial, ISocial, IMySocialData, ISocialActor, ISocialActorInfo, MySocial, Social, SocialActorType, SocialActorTypes, SocialFollowResult, SocialStatusCode, } from "./types";
declare module "../rest" {
    interface SPRest {
        /**
         * Access to the social instance which allows you to track followed sites, people and docs.
         */
        readonly social: ISocial;
    }
}
//# sourceMappingURL=index.d.ts.map