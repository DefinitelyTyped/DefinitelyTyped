// Type definitions for meteor-publish-composite
// Project: https://github.com/englue/meteor-publish-composite
// Definitions by: Robert Van Gorkom <https://github.com/vangorra>
//                 Matthew Zartman <https://github.com/mrz5018>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="meteor" />

declare interface PublishCompositeConfigN {
    collectionName?: string;
    children?: PublishCompositeConfigN[];
    find(
        ...args: any[]
    ): Mongo.Cursor<any>;
}

declare interface PublishCompositeConfig4<InLevel1, InLevel2, InLevel3, InLevel4, OutLevel> {
    collectionName?: string;
    children?: PublishCompositeConfigN[];
    find(
        arg4: InLevel4,
        arg3: InLevel3,
        arg2: InLevel2,
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig3<InLevel1, InLevel2, InLevel3, OutLevel> {
    collectionName?: string;
    children?: PublishCompositeConfig4<InLevel1, InLevel2, InLevel3, OutLevel, any>[];
    find(
        arg3: InLevel3,
        arg2: InLevel2,
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig2<InLevel1, InLevel2, OutLevel> {
    collectionName?: string;
    children?: PublishCompositeConfig3<InLevel1, InLevel2, OutLevel, any>[];
    find(
        arg2: InLevel2,
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig1<InLevel1, OutLevel> {
    collectionName?: string;
    children?: PublishCompositeConfig2<InLevel1, OutLevel, any>[];
    find(
        arg1: InLevel1
    ): Mongo.Cursor<OutLevel>;
}

declare interface PublishCompositeConfig<OutLevel> {
    collectionName?: string;
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
