declare module "redux-ui" {
  import * as ReactRedux from 'react-redux'
  
  export interface uiParams {
    // optional key which is used to determine the UI path in which state will
    // be stored. if omitted this is randomly generated.
    key?: string
    
    // optional persist, defaults to false. if set to true persist will keep UI
    // state for this component after it unmounts. if set to false the UI state will
    // be deleted and recreated when the component remounts
    persist?: boolean
    
    // **required**: UI state for the component
    state: any
    
    // optional mergeProps passed to react-redux' @connect
    mergeProps?: ReactRedux.MergeProps
    
    // optional `options` passed to react-redux @connect
    options?: ReactRedux.Options
  }
  
  export default function ui(params: uiParams): <T>(component: T) => T
}
