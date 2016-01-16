// Type definitions for meteor-publish-composite
// Project: https://github.com/englue/meteor-publish-composite
// Definitions by: Robert Van Gorkom <https://github.com/vangorra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../meteor/meteor.d.ts" />

declare interface IPublishCompositeConfigN {
    children? : IPublishCompositeConfigN[];
    find(...args : any[]) : Mongo.Cursor<any>;
}

declare interface IPublishCompositeConfig4<InLevel1, InLevel2, InLevel3, InLevel4, OutLevel> {
    children? : IPublishCompositeConfigN[];
    find(arg1 : InLevel1, arg2 : InLevel2, arg3 : InLevel3, arg4 : InLevel4) : Mongo.Cursor<OutLevel>;
}

declare interface IPublishCompositeConfig3<InLevel1, InLevel2, InLevel3, OutLevel> {
    children? : IPublishCompositeConfig4<InLevel1, InLevel2, InLevel3, OutLevel, any>[];
    find(arg1 : InLevel1, arg2 : InLevel2, arg3 : InLevel3) : Mongo.Cursor<OutLevel>;
}

declare interface IPublishCompositeConfig2<InLevel1, InLevel2, OutLevel> {
    children? : IPublishCompositeConfig3<InLevel1, InLevel2, OutLevel, any>[];
    find(arg1 : InLevel1, arg2 : InLevel2) : Mongo.Cursor<OutLevel>;
}

declare interface IPublishCompositeConfig1<InLevel1, OutLevel> {
    children? : IPublishCompositeConfig2<InLevel1, OutLevel, any>[];
    find(arg1 : InLevel1) : Mongo.Cursor<OutLevel>;
}

declare interface IPublishCompositeConfig<OutLevel> {
    children? : IPublishCompositeConfig1<OutLevel, any>[];
    find() : Mongo.Cursor<OutLevel>;
}

declare module Meteor {
    function publishComposite(name : string, config : IPublishCompositeConfig<any>) : void;
    function publishComposite(name : string, configFunc : (...args : any[]) => IPublishCompositeConfig<any>) : void;
}
