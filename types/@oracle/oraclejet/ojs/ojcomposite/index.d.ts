declare namespace oj {  
  namespace Composite {
    function getComponentMetadata(name: string): oj.Composite.Metadata|null;
    function register(name: string, descriptor: {metadata: oj.Composite.Metadata, view: string, viewModel: ((param0: oj.Composite.ViewModelContext)=> void|object), parseFunction: ((value: string, name: string, meta: Object, defaultParseFunction: (value: string)=> any)=>any)}): void;
  }
  namespace Composite {
    type Metadata =
    {
      name: string, version: string, jetVersion: string, properties?: object, methods?: object, events?: object, slots?: object
    }
  }
  namespace Composite {
    type PropertyChangedContext =
    {
      property: string, value: any, previousValue: any, updatedFrom: 'external'|'internal', subproperty?: {path: string, value: any, previousValue: any}
    }
  }
  namespace Composite {
    type ViewModel =
    {
      activated: ((param0: oj.Composite.ViewModelContext)=> Promise<any>|void), connected: ((param0: oj.Composite.ViewModelContext)=> void), bindingsApplied: ((param0: oj.Composite.ViewModelContext)=> void), propertyChanged: ((param0: oj.Composite.PropertyChangedContext)=> void), disconnected: ((param0: Element)=> void)
    }
  }
  namespace Composite {
    type ViewModelContext =
    {
      element: Element, properties: object, slotCounts: object, unique: string, uniqueId: string
    }
  }

}
