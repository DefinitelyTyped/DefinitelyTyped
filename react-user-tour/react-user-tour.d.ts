// Type definitions for react-user-tour
// Project: https://github.com/socialtables/react-user-tour
// Definitions by: Carlo Cancellieri <https://github.com/ccancellieri>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-user-tour" {

  // Import React
  import { HTMLAttributes, ComponentClass } from 'react';
  
  interface TourStep {
    step: number
    selector: string
    title: string
    body: string
    position?: string
  }

  interface TourProps extends HTMLAttributes {
    steps:TourStep[]
    active:boolean
    step:number
    onNext:any
    onBack:any
    onCancel:any
  }

  var ReactUserTour: ComponentClass<TourProps>;
  export default ReactUserTour
}
