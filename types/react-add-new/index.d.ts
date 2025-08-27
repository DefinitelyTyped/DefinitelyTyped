export interface CreateStatus {
    status: "OK" | "ERR";
    msg: string;
}

export function createContext(componentName: string, contextPath: string): Promise<CreateStatus>;

export function createComponent(
    componentName: string,
    componentPath: string,
    noStyles: boolean,
    noTypes: boolean,
): Promise<CreateStatus>;

export function validateName(name: string): true | string;
