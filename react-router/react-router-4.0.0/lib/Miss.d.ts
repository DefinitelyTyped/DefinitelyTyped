import * as React from 'react'

 declare namespace MissModule{

    interface MissProps extends React.Props<Miss>{
        children?:any,
        location?:any,
        render?:any,
        component:any
    }

    export interface Miss extends React.ComponentClass<MissProps>{}
}

declare const Miss:MissModule.Miss;
export default Miss;

