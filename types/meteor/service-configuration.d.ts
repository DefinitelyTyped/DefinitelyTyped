declare module "meteor/service-configuration" {
    interface Configuration {
        appId: string;
        secret: string;
    }
    class ServiceConfiguration {
        configurations: Mongo.Collection<Configuration>;
    }
}
