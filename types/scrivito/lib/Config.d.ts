import { Obj } from './Obj';

export interface ConfigOptions {
    tenant: string,
    homepage: () => Obj,
    origin?: string;
    routingBasePath?: string;
    visitorAuthentication?: boolean;
    //Hard to type
    constraintsValidation?: (constraints: any) => Function;
    endpoint?: string 
}