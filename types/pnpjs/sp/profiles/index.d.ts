import { IProfiles } from "./types";
export { IProfiles, Profiles, IClientPeoplePickerQueryParameters, IFollowedContent, IHashTag, IHashTagCollection, IPeoplePickerEntity, IPeoplePickerEntityData, IPeoplePickerQuerySettings, IUserProfile, UrlZone, } from "./types";
declare module "../rest" {
    interface SPRest {
        readonly profiles: IProfiles;
    }
}
//# sourceMappingURL=index.d.ts.map