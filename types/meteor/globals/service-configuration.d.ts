declare interface Configuration {
    appId: string;
    secret: string;
}
declare var ServiceConfiguration: {
    configurations: Mongo.Collection<Configuration>;
};
