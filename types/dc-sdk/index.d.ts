// Type definitions for dc-sdk 0.0.1
// Project: https://github.com/dvgis/dc-sdk
// Definitions by: Caven Chen  <https://github.com/cavencj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ImageryLayer,
    Scene ,
    Viewer as CesiumViewer,
    Camera,
    DataSourceCollection,
    ImageryLayerCollection,
    TerrainProvider,
    EntityCollection } from './Cesium'

declare type Config = {
     baseUrl?:string,
     Cesium?:any,
     echarts?:any,
     Supercluste?:any
}


declare namespace DC {


      enum MouseMode {

      }

      function ready(config?:Config):Promise<void>

      function registerLib(name:string,lib:any):void

      function getLib(name:string):any

      class Viewer {

        readonly delegate: CesiumViewer
        readonly container: Element
        readonly widgetContainer: Element
        readonly layerContainer: Element
        readonly scene:Scene
        readonly camera:Camera
        readonly canvas:HTMLCanvasElement
        readonly dataSources:DataSourceCollection
        readonly imageryLayers:ImageryLayerCollection
        readonly terrainProvider:TerrainProvider
        readonly entities:EntityCollection


        constructor(container: Element | string,options?:object)

        setOptions(options:object):this


        setPitchRange(min:number, max:number):this

        changeSceneMode(sceneMode:number,duration:number):this

        changeMouseMode(mouseMode:MouseMode):this

        addBaseLayer(baseLayer: ImageryLayer | ImageryLayer[],options?:object):this

        changeBaseLayer(index:number):this

      }
}


// eslint-disable-next-line @definitelytyped/export-just-namespace
export = DC;

export as namespace DC


