declare const templateProp: {
    renderTemplateFile(file: string, data: any): Promise<string>;
    renderString(template: string, data: any):Promise<any>;
};

export = templateProp;
