declare class DiscourseSSO {
    constructor(ssoSecret: string);
    validate(payload: string, sig: string): boolean;
    getNonce(payload: string): string;
    buildLoginString(params: DiscourseSSO.UserParams): string;
}

declare namespace DiscourseSSO {
    interface UserParams {
        nonce: string;
        external_id: string;
        email: string;
        admin?: boolean | undefined;
        moderator?: boolean | undefined;
        username?: string | undefined;
        name?: string | undefined;
        avatar_url?: string | undefined;
        add_groups?: string[] | undefined;
        remove_groups?: string[] | undefined;
    }
}
export = DiscourseSSO;
