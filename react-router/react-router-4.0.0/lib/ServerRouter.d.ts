import * as React from 'react'

declare namespace ServerRouterModule{
    interface ServerRouterProps extends React.Props<ServerRouter>{
        context:any,
        location:string,
        children?:any
    }
    export interface ServerRouter extends React.ComponentClass<ServerRouterProps>{}
}

declare const ServerRouter:ServerRouterModule.ServerRouter;

export default ServerRouter;