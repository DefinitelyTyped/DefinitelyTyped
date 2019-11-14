declare const templateProp: {
    renderTemplateFile(file: string, data: any): Promise<any>;
    renderString(template: string, data: any):Promise<any>;
};

export = templateProp;
