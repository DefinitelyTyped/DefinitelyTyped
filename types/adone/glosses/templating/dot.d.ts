declare namespace adone.templating {
    namespace dot {
        namespace I {
            type RenderFunction = (...args: any[]) => string;

            interface TemplateSettings {
                evaluate: RegExp;
                interpolate: RegExp;
                encode: RegExp;
                use: RegExp;
                useParams: RegExp;
                define: RegExp;
                defineParams: RegExp;
                conditional: RegExp;
                iterate: RegExp;
                varname: string;
                strip: boolean;
                append: boolean;
                selfcontained: boolean;
            }
        }
        const version: string;

        let templateSettings: I.TemplateSettings;

        function template(tmpl: string, c?: I.TemplateSettings, def?: {}): I.RenderFunction;

        function compile(tmpl: string, def?: object): I.RenderFunction;

        namespace I {
            interface ProcessOptions {
                path?: string;
                destination?: string;
                global?: string;
                templateSettings?: Partial<I.TemplateSettings>;
            }
        }

        function process(options?: I.ProcessOptions): { [path: string]: I.RenderFunction };
    }
}
