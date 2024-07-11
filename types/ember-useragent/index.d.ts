import UserAgentService from "./services/user-agent";

export * from "./helpers/user-agent";
export * from "./services/user-agent";

declare module "@ember/service" {
    interface ServiceRegistry {
        userAgent: UserAgentService;
    }
}
