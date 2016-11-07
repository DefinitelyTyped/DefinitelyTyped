import * as React from 'react'

declare namespace MatchModule{
    interface MatchProps extends React.Props<Match>{
        pattern:string,
        exactly?:boolean,
        location?:any,
        children?:any,
        render?:any,
        component:any
    }
    interface Match extends React.ComponentClass<MatchProps>{}
}

declare const Match :MatchModule.Match
export default Match