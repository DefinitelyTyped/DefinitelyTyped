// Type definitions for meteor-publish-composite
// Project: https://github.com/englue/meteor-publish-composite
// Definitions by: Robert Van Gorkom <https://github.com/vangorra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="meteor" />

declare interface PublishCompositeConfigN {
    children?: PublishCompositeConfigN[];
    find(
        ...args: any[]
    ): Mongo.Cursor<any>;
}

declare interface PublishCompositeConfig4<InLevel1, InLevel2, InLevel3, InLevel4, OutLevel> {
    children?: PublishCompositeConfigN[];
    find(
        arg4: InLevel4,
        arg3: InLevel3,
        arg2: InLevel2,
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig3<InLevel1, InLevel2, InLevel3, OutLevel> {
    children?: PublishCompositeConfig4<InLevel1, InLevel2, InLevel3, OutLevel, any>[];
    find(
        arg3: InLevel3,
        arg2: InLevel2,
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig2<InLevel1, InLevel2, OutLevel> {
    children?: PublishCompositeConfig3<InLevel1, InLevel2, OutLevel, any>[];
    find(
        arg2: InLevel2,
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig1<InLevel1, OutLevel> {
    children?: PublishCompositeConfig2<InLevel1, OutLevel, any>[];
    find(
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig<OutLevel> {
    children?: PublishCompositeConfig1<OutLevel, any>[];
    find(): Mongo.Cursor<OutLevel>;
}

declare module "meteor/reywood:publish-composite" {
    function publishComposite(
        name: string,
        config: PublishCompositeConfig<any> | PublishCompositeConfig<any>[]
    ): void;

    function publishComposite(
        name: string,
        configFunc: (...args: any[]) =>
            PublishCompositeConfig<any> | PublishCompositeConfig<any>[]
    ): void;
}
