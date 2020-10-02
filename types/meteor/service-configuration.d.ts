import { Mongo } from 'meteor/mongo';
declare module "meteor/service-configuration" {
    interface Configuration {
        appId: string;
        secret: string;
    }
    var ServiceConfiguration: {
        configurations: Mongo.Collection<Configuration>;
    }
}
