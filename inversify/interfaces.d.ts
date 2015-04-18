interface TypeBindingInterface<TServiceType> {
  runtimeIdentifier : string;
  implementationType : { new(): TServiceType ;};
  cache : TServiceType;
  scope : number; // TypeBindingScopeEnum
}

interface KernelInterface {
  bind(typeBinding : TypeBindingInterface<any>) : void;
  unbind(runtimeIdentifier : string) : void;
  unbindAll() : void;
  resolve<TImplementationType>(runtimeIdentifier : string) : TImplementationType;
}
